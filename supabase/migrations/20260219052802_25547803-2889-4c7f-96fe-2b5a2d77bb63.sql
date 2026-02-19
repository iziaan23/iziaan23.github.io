
-- Create feedback table
CREATE TABLE public.feedback (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review TEXT NOT NULL,
  product_service TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Anyone can submit feedback
CREATE POLICY "Anyone can submit feedback"
ON public.feedback
FOR INSERT
WITH CHECK (true);

-- Anyone can view approved feedback (for testimonials page)
CREATE POLICY "Anyone can view approved feedback"
ON public.feedback
FOR SELECT
USING (status = 'approved');

-- Admins can view all feedback
CREATE POLICY "Admins can view all feedback"
ON public.feedback
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update feedback (approve/reject)
CREATE POLICY "Admins can update feedback"
ON public.feedback
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete feedback
CREATE POLICY "Admins can delete feedback"
ON public.feedback
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));
