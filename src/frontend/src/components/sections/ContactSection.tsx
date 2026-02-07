import { useState, FormEvent } from 'react';
import GlassCard from '../GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useContactSubmission } from '@/hooks/useContactSubmission';
import { validateEmail, validateRequired } from '@/lib/validation';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { submitContact, isSubmitting, isSuccess, isError, error } = useContactSubmission();
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate
    const newErrors: Record<string, string> = {};
    if (!validateRequired(formData.name)) {
      newErrors.name = 'Name is required';
    }
    if (!validateRequired(formData.email)) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!validateRequired(formData.message)) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    await submitContact(formData.name, formData.email, formData.message);
    
    // Clear form on success
    if (!isError) {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div
          ref={ref}
          className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Form */}
          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/80 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/80 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/80 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20 transition-all min-h-[150px] resize-none"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {isSuccess && (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Thank you! Your message has been sent successfully.
                  </AlertDescription>
                </Alert>
              )}

              {isError && (
                <Alert className="bg-red-50 border-red-200">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    {error?.message || 'Failed to send message. Please try again.'}
                  </AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <GlassCard>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm">Let's start a conversation</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="font-semibold text-gray-900 mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vijay2git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex-1"
                  aria-label="GitHub Profile"
                >
                  <SiGithub className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex-1"
                  aria-label="LinkedIn Profile"
                >
                  <SiLinkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">LinkedIn</span>
                </a>
              </div>
            </GlassCard>

            <GlassCard className="bg-gradient-to-br from-blue-50/80 to-purple-50/80">
              <p className="text-gray-700 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
