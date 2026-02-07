import { useState } from 'react';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Shield } from 'lucide-react';
import LoginButton from '../auth/LoginButton';
import AdminSubmissionsPanel from './AdminSubmissionsPanel';

export default function AdminPanel() {
  const { identity } = useInternetIdentity();
  const [isOpen, setIsOpen] = useState(false);

  if (!identity) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="rounded-full w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            aria-label="Admin Panel"
          >
            <Shield className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-xl bg-white/95 backdrop-blur-md overflow-y-auto border-gray-200">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <span>Admin Panel</span>
              <LoginButton />
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <AdminSubmissionsPanel />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
