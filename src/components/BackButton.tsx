import { useNavigate } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  to?: string;
  label?: string;
}

export function BackButton({ to, label = 'Back' }: BackButtonProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (to) {
      navigate({ to });
    } else {
      window.history.back();
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors group"
    >
      <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
      <span className="font-medium">{label}</span>
    </button>
  );
}
