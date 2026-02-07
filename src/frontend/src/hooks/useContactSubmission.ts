import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useState } from 'react';

export function useContactSubmission() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [isSuccess, setIsSuccess] = useState(false);

  const mutation = useMutation({
    mutationFn: async ({ name, email, message }: { name: string; email: string; message: string }) => {
      if (!actor) throw new Error('Actor not available');
      await actor.submitContactForm(name, email, message);
    },
    onSuccess: () => {
      setIsSuccess(true);
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
      setTimeout(() => setIsSuccess(false), 5000);
    },
  });

  return {
    submitContact: (name: string, email: string, message: string) =>
      mutation.mutate({ name, email, message }),
    isSubmitting: mutation.isPending,
    isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
