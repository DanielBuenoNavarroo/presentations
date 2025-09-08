"use client";

import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  user: User;
};

const NewProjectButton = ({ user }: Props) => {
  const router = useRouter();
  return (
    <Button
      className="rounded-lg font-semibold"
      disabled={!user.subscription}
      onClick={() => router.push("/create-page")}
    >
      <Plus />
      New Project
    </Button>
  );
};

export default NewProjectButton;
