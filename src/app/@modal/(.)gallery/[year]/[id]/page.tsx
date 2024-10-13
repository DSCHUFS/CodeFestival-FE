'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  const router = useRouter();

  const onOpenChange = (open: boolean) => {
    if (!open) router.back();
  };

  return (
    <Dialog.Root open={true} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>{photoId}</Dialog.Title>
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
