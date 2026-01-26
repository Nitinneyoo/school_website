import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { LogOut, AlertTriangle } from 'lucide-react';

interface LogoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function LogoutDialog({ isOpen, onClose, onConfirm }: LogoutDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="glass-card border-red-500/20">
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <AlertDialogHeader className="relative z-10">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 rounded-full bg-red-500/20 border border-red-500/30">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
          </div>
          <AlertDialogTitle className="text-center">
            Confirm Logout
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-base">
            Are you sure you want to log out? You will need to sign in again to access your dashboard.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="relative z-10 sm:justify-center gap-3">
          <AlertDialogCancel 
            onClick={onClose}
            className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white px-6"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white border-0 px-6 flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
