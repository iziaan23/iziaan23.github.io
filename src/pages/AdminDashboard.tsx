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

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  useEffect(() => {
    checkAuth();
    fetchMessages();
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
    setIsLoading(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching messages:", error);
      toast({
        title: "Error",
        description: "Failed to load messages.",
        variant: "destructive",
      });
    } else {
      setMessages(data || []);
    }
    setIsLoading(false);
  };

  const setupRealtime = () => {
    const channel = supabase
      .channel("contact-messages-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "contact_messages",
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setMessages((prev) => [payload.new as ContactMessage, ...prev]);
            toast({
              title: "New Message!",
              description: `New message from ${(payload.new as ContactMessage).name}`,
            });
          } else if (payload.eventType === "UPDATE") {
            setMessages((prev) =>
              prev.map((msg) =>
                msg.id === (payload.new as ContactMessage).id
                  ? (payload.new as ContactMessage)
                  : msg
              )
            );
          } else if (payload.eventType === "DELETE") {
            setMessages((prev) =>
              prev.filter((msg) => msg.id !== (payload.old as ContactMessage).id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const markAsRead = async (id: string) => {
    const { error } = await supabase
      .from("contact_messages")
      .update({ is_read: true })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to mark as read.",
        variant: "destructive",
      });
    }
  };

  const deleteMessage = async (id: string) => {
    const { error } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete message.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Deleted",
        description: "Message deleted successfully.",
      });
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const unreadCount = messages.filter((m) => !m.is_read).length;

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
              <p className="text-sm text-gray-500">Contact Messages</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchMessages}
              className="hidden sm:flex"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-navy">{messages.length}</div>
            <div className="text-sm text-gray-500">Total Messages</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-secondary">{unreadCount}</div>
            <div className="text-sm text-gray-500">Unread</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-emerald-600">
              {messages.length - unreadCount}
            </div>
            <div className="text-sm text-gray-500">Read</div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-blue-600">
              {messages.filter((m) => {
                const date = new Date(m.created_at);
                const today = new Date();
                return date.toDateString() === today.toDateString();
              }).length}
            </div>
            <div className="text-sm text-gray-500">Today</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-navy">All Messages</h2>
            </div>

            {isLoading ? (
              <div className="p-12 text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto text-secondary" />
                <p className="mt-2 text-gray-500">Loading messages...</p>
              </div>
            ) : messages.length === 0 ? (
              <div className="p-12 text-center">
                <MessageSquare className="w-12 h-12 mx-auto text-gray-300" />
                <p className="mt-2 text-gray-500">No messages yet</p>
              </div>
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
                        className={`cursor-pointer hover:bg-gray-50 ${
                          selectedMessage?.id === msg.id ? "bg-secondary/5" : ""
                        } ${!msg.is_read ? "font-medium" : ""}`}
                        onClick={() => {
                          setSelectedMessage(msg);
                          if (!msg.is_read) markAsRead(msg.id);
                        }}
                      >
                        <TableCell>
                          {msg.is_read ? (
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                          ) : (
                            <Circle className="w-4 h-4 text-secondary fill-secondary" />
                          )}
                        </TableCell>
                        <TableCell>{msg.name}</TableCell>
                        <TableCell className="hidden md:table-cell text-gray-500">
                          {msg.email}
                        </TableCell>
                        <TableCell className="hidden lg:table-cell text-gray-500">
                          {format(new Date(msg.created_at), "MMM d, yyyy")}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteMessage(msg.id);
                            }}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
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

          {/* Message Detail */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-navy">Message Details</h2>
            </div>

            {selectedMessage ? (
              <div className="p-5 space-y-4">
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    From
                  </div>
                  <div className="font-semibold text-navy text-lg">
                    {selectedMessage.name}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {selectedMessage.email}
                  </a>
                </div>

                {selectedMessage.phone && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <a
                      href={`tel:${selectedMessage.phone}`}
                      className="hover:text-secondary transition-colors"
                    >
                      {selectedMessage.phone}
                    </a>
                  </div>
                )}

                {selectedMessage.company && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="w-4 h-4" />
                    <span>{selectedMessage.company}</span>
                  </div>
                )}

                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {format(
                      new Date(selectedMessage.created_at),
                      "MMMM d, yyyy 'at' h:mm a"
                    )}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                    Message
                  </div>
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {selectedMessage.message}
                  </p>
                </div>

                <div className="pt-4 flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-secondary hover:bg-secondary/90"
                    onClick={() =>
                      window.open(`mailto:${selectedMessage.email}`, "_blank")
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Reply
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-500 border-red-200 hover:bg-red-50"
                    onClick={() => deleteMessage(selectedMessage.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center">
                <Eye className="w-12 h-12 mx-auto text-gray-300" />
                <p className="mt-2 text-gray-500">Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
