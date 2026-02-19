import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MessageSquare,
  LogOut,
  Mail,
  Phone,
  Building2,
  Calendar,
  Eye,
  Trash2,
  RefreshCw,
  Loader2,
  CheckCircle,
  Circle,
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
} from "lucide-react";
import { format } from "date-fns";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

interface Feedback {
  id: string;
  name: string;
  company: string | null;
  rating: number;
  review: string;
  product_service: string | null;
  status: string;
  created_at: string;
}

type Tab = "messages" | "feedback";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<Tab>("messages");

  // Contact messages state
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoadingMessages, setIsLoadingMessages] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  // Feedback state
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(true);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);

  useEffect(() => {
    checkAuth();
    fetchMessages();
    fetchFeedback();
    setupRealtime();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin/login");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .single();

    if (!roles) {
      await supabase.auth.signOut();
      navigate("/admin/login");
    }
  };

  const fetchMessages = async () => {
    setIsLoadingMessages(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Error", description: "Failed to load messages.", variant: "destructive" });
    } else {
      setMessages(data || []);
    }
    setIsLoadingMessages(false);
  };

  const fetchFeedback = async () => {
    setIsLoadingFeedback(true);
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({ title: "Error", description: "Failed to load feedback.", variant: "destructive" });
    } else {
      setFeedbackList(data || []);
    }
    setIsLoadingFeedback(false);
  };

  const setupRealtime = () => {
    const channel = supabase
      .channel("admin-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "contact_messages" }, (payload) => {
        if (payload.eventType === "INSERT") {
          setMessages((prev) => [payload.new as ContactMessage, ...prev]);
          toast({ title: "New Message!", description: `New message from ${(payload.new as ContactMessage).name}` });
        } else if (payload.eventType === "UPDATE") {
          setMessages((prev) => prev.map((msg) => msg.id === (payload.new as ContactMessage).id ? (payload.new as ContactMessage) : msg));
        } else if (payload.eventType === "DELETE") {
          setMessages((prev) => prev.filter((msg) => msg.id !== (payload.old as ContactMessage).id));
        }
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "feedback" }, (payload) => {
        if (payload.eventType === "INSERT") {
          setFeedbackList((prev) => [payload.new as Feedback, ...prev]);
          toast({ title: "New Feedback!", description: `New review from ${(payload.new as Feedback).name}` });
        } else if (payload.eventType === "UPDATE") {
          setFeedbackList((prev) => prev.map((f) => f.id === (payload.new as Feedback).id ? (payload.new as Feedback) : f));
        } else if (payload.eventType === "DELETE") {
          setFeedbackList((prev) => prev.filter((f) => f.id !== (payload.old as Feedback).id));
        }
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  };

  const markAsRead = async (id: string) => {
    await supabase.from("contact_messages").update({ is_read: true }).eq("id", id);
  };

  const deleteMessage = async (id: string) => {
    const { error } = await supabase.from("contact_messages").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: "Failed to delete message.", variant: "destructive" });
    } else {
      toast({ title: "Deleted", description: "Message deleted successfully." });
      if (selectedMessage?.id === id) setSelectedMessage(null);
    }
  };

  const updateFeedbackStatus = async (id: string, status: "approved" | "rejected") => {
    const { error } = await supabase.from("feedback").update({ status }).eq("id", id);
    if (error) {
      toast({ title: "Error", description: "Failed to update feedback.", variant: "destructive" });
    } else {
      toast({ title: status === "approved" ? "Approved!" : "Rejected", description: `Feedback ${status} successfully.` });
      if (selectedFeedback?.id === id) setSelectedFeedback((prev) => prev ? { ...prev, status } : null);
    }
  };

  const deleteFeedback = async (id: string) => {
    const { error } = await supabase.from("feedback").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: "Failed to delete feedback.", variant: "destructive" });
    } else {
      toast({ title: "Deleted", description: "Feedback deleted." });
      if (selectedFeedback?.id === id) setSelectedFeedback(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const unreadCount = messages.filter((m) => !m.is_read).length;
  const pendingFeedback = feedbackList.filter((f) => f.status === "pending").length;
  const approvedFeedback = feedbackList.filter((f) => f.status === "approved").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-navy text-lg font-poppins">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">SquarePack Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => { fetchMessages(); fetchFeedback(); }} className="hidden sm:flex">
              <RefreshCw className="w-4 h-4 mr-2" />Refresh
            </Button>
            <Button variant="destructive" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="container mx-auto px-4 flex gap-1 pb-0">
          <button
            onClick={() => setActiveTab("messages")}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors duration-200 ${
              activeTab === "messages" ? "border-secondary text-secondary" : "border-transparent text-gray-500 hover:text-navy"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            Messages
            {unreadCount > 0 && (
              <span className="bg-secondary text-navy text-xs font-bold px-2 py-0.5 rounded-full">{unreadCount}</span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("feedback")}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors duration-200 ${
              activeTab === "feedback" ? "border-secondary text-secondary" : "border-transparent text-gray-500 hover:text-navy"
            }`}
          >
            <Star className="w-4 h-4" />
            Feedback
            {pendingFeedback > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{pendingFeedback}</span>
            )}
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {activeTab === "messages" ? (
            <>
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-navy">{messages.length}</div>
                <div className="text-sm text-gray-500">Total Messages</div>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-secondary">{unreadCount}</div>
                <div className="text-sm text-gray-500">Unread</div>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-emerald-600">{messages.length - unreadCount}</div>
                <div className="text-sm text-gray-500">Read</div>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600">
                  {messages.filter((m) => new Date(m.created_at).toDateString() === new Date().toDateString()).length}
                </div>
                <div className="text-sm text-gray-500">Today</div>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-navy">{feedbackList.length}</div>
                <div className="text-sm text-gray-500">Total Reviews</div>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-orange-500">{pendingFeedback}</div>
                <div className="text-sm text-gray-500">Pending</div>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-emerald-600">{approvedFeedback}</div>
                <div className="text-sm text-gray-500">Approved</div>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-secondary">
                  {feedbackList.length
                    ? (feedbackList.reduce((s, f) => s + f.rating, 0) / feedbackList.length).toFixed(1)
                    : "—"}
                </div>
                <div className="text-sm text-gray-500">Avg Rating</div>
              </div>
            </>
          )}
        </div>

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-navy">All Messages</h2>
              </div>
              {isLoadingMessages ? (
                <div className="p-12 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-secondary" /><p className="mt-2 text-gray-500">Loading messages...</p></div>
              ) : messages.length === 0 ? (
                <div className="p-12 text-center"><MessageSquare className="w-12 h-12 mx-auto text-gray-300" /><p className="mt-2 text-gray-500">No messages yet</p></div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-10"></TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="hidden md:table-cell">Email</TableHead>
                        <TableHead className="hidden lg:table-cell">Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {messages.map((msg) => (
                        <TableRow
                          key={msg.id}
                          className={`cursor-pointer hover:bg-gray-50 ${selectedMessage?.id === msg.id ? "bg-secondary/5" : ""} ${!msg.is_read ? "font-medium" : ""}`}
                          onClick={() => { setSelectedMessage(msg); if (!msg.is_read) markAsRead(msg.id); }}
                        >
                          <TableCell>
                            {msg.is_read ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : <Circle className="w-4 h-4 text-secondary fill-secondary" />}
                          </TableCell>
                          <TableCell>{msg.name}</TableCell>
                          <TableCell className="hidden md:table-cell text-gray-500">{msg.email}</TableCell>
                          <TableCell className="hidden lg:table-cell text-gray-500">{format(new Date(msg.created_at), "MMM d, yyyy")}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); deleteMessage(msg.id); }} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200"><h2 className="font-semibold text-navy">Message Details</h2></div>
              {selectedMessage ? (
                <div className="p-5 space-y-4">
                  <div><div className="text-xs text-gray-400 uppercase tracking-wide mb-1">From</div><div className="font-semibold text-navy text-lg">{selectedMessage.name}</div></div>
                  <div className="flex items-center gap-2 text-gray-600"><Mail className="w-4 h-4" /><a href={`mailto:${selectedMessage.email}`} className="hover:text-secondary transition-colors">{selectedMessage.email}</a></div>
                  {selectedMessage.phone && <div className="flex items-center gap-2 text-gray-600"><Phone className="w-4 h-4" /><a href={`tel:${selectedMessage.phone}`} className="hover:text-secondary transition-colors">{selectedMessage.phone}</a></div>}
                  {selectedMessage.company && <div className="flex items-center gap-2 text-gray-600"><Building2 className="w-4 h-4" /><span>{selectedMessage.company}</span></div>}
                  <div className="flex items-center gap-2 text-gray-600"><Calendar className="w-4 h-4" /><span>{format(new Date(selectedMessage.created_at), "MMMM d, yyyy 'at' h:mm a")}</span></div>
                  <div className="pt-4 border-t border-gray-200"><div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Message</div><p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{selectedMessage.message}</p></div>
                  <div className="pt-4 flex gap-2">
                    <Button size="sm" className="flex-1 bg-secondary hover:bg-secondary/90" onClick={() => window.open(`mailto:${selectedMessage.email}`, "_blank")}><Mail className="w-4 h-4 mr-2" />Reply</Button>
                    <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50" onClick={() => deleteMessage(selectedMessage.id)}><Trash2 className="w-4 h-4" /></Button>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center"><Eye className="w-12 h-12 mx-auto text-gray-300" /><p className="mt-2 text-gray-500">Select a message to view details</p></div>
              )}
            </div>
          </div>
        )}

        {/* Feedback Tab */}
        {activeTab === "feedback" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200"><h2 className="font-semibold text-navy">All Feedback</h2></div>
              {isLoadingFeedback ? (
                <div className="p-12 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-secondary" /><p className="mt-2 text-gray-500">Loading feedback...</p></div>
              ) : feedbackList.length === 0 ? (
                <div className="p-12 text-center"><Star className="w-12 h-12 mx-auto text-gray-300" /><p className="mt-2 text-gray-500">No feedback yet</p></div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead className="hidden md:table-cell">Product</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {feedbackList.map((fb) => (
                        <TableRow
                          key={fb.id}
                          className={`cursor-pointer hover:bg-gray-50 ${selectedFeedback?.id === fb.id ? "bg-secondary/5" : ""}`}
                          onClick={() => setSelectedFeedback(fb)}
                        >
                          <TableCell className="font-medium">{fb.name}</TableCell>
                          <TableCell>
                            <div className="flex gap-0.5">
                              {[1,2,3,4,5].map((s) => (
                                <Star key={s} className={`w-3.5 h-3.5 ${s <= fb.rating ? "text-secondary fill-secondary" : "text-gray-200"}`} />
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="hidden md:table-cell text-gray-500 text-sm">{fb.product_service || "—"}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                              fb.status === "approved" ? "bg-emerald-100 text-emerald-700" :
                              fb.status === "rejected" ? "bg-red-100 text-red-700" :
                              "bg-orange-100 text-orange-700"
                            }`}>
                              {fb.status.charAt(0).toUpperCase() + fb.status.slice(1)}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex gap-1 justify-end">
                              {fb.status !== "approved" && (
                                <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); updateFeedbackStatus(fb.id, "approved"); }} className="text-emerald-600 hover:bg-emerald-50">
                                  <ThumbsUp className="w-4 h-4" />
                                </Button>
                              )}
                              {fb.status !== "rejected" && (
                                <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); updateFeedbackStatus(fb.id, "rejected"); }} className="text-red-500 hover:bg-red-50">
                                  <ThumbsDown className="w-4 h-4" />
                                </Button>
                              )}
                              <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); deleteFeedback(fb.id); }} className="text-red-500 hover:bg-red-50">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200"><h2 className="font-semibold text-navy">Feedback Details</h2></div>
              {selectedFeedback ? (
                <div className="p-5 space-y-4">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className={`w-6 h-6 ${s <= selectedFeedback.rating ? "text-secondary fill-secondary" : "text-gray-200"}`} />
                    ))}
                  </div>
                  <div><div className="text-xs text-gray-400 uppercase tracking-wide mb-1">From</div><div className="font-semibold text-navy text-lg">{selectedFeedback.name}</div></div>
                  {selectedFeedback.company && <div className="flex items-center gap-2 text-gray-600"><Building2 className="w-4 h-4" /><span>{selectedFeedback.company}</span></div>}
                  {selectedFeedback.product_service && <div className="text-sm text-secondary font-medium">📦 {selectedFeedback.product_service}</div>}
                  <div className="flex items-center gap-2 text-gray-600"><Calendar className="w-4 h-4" /><span>{format(new Date(selectedFeedback.created_at), "MMM d, yyyy")}</span></div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Review</div>
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed italic">"{selectedFeedback.review}"</p>
                  </div>
                  <div className="pt-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      selectedFeedback.status === "approved" ? "bg-emerald-100 text-emerald-700" :
                      selectedFeedback.status === "rejected" ? "bg-red-100 text-red-700" :
                      "bg-orange-100 text-orange-700"
                    }`}>
                      {selectedFeedback.status.charAt(0).toUpperCase() + selectedFeedback.status.slice(1)}
                    </span>
                  </div>
                  <div className="pt-4 flex gap-2 flex-wrap">
                    {selectedFeedback.status !== "approved" && (
                      <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white flex-1" onClick={() => updateFeedbackStatus(selectedFeedback.id, "approved")}>
                        <ThumbsUp className="w-4 h-4 mr-1" /> Approve
                      </Button>
                    )}
                    {selectedFeedback.status !== "rejected" && (
                      <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 flex-1" onClick={() => updateFeedbackStatus(selectedFeedback.id, "rejected")}>
                        <ThumbsDown className="w-4 h-4 mr-1" /> Reject
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="text-red-500 border-red-200 hover:bg-red-50" onClick={() => deleteFeedback(selectedFeedback.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center"><MessageCircle className="w-12 h-12 mx-auto text-gray-300" /><p className="mt-2 text-gray-500">Select a review to view details</p></div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
