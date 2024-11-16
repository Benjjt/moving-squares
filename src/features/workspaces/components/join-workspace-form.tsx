"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useJoinWorkspace } from "../api/use-join-workspace";
import { useInviteCode } from "../hooks/use-invite-code";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { useRouter } from "next/navigation";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  };
}

const JoinWorkspaceForm = ({ initialValues }: JoinWorkspaceFormProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const inviteCode = useInviteCode();
  const { mutate, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    mutate(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="p-7">
        <CardTitle className="text-xl font-bold">Join Workspace</CardTitle>
        <CardDescription>
          You&apos;ve been invited to join <strong>{initialValues.name}</strong>{" "}
          workspace.
        </CardDescription>
      </CardHeader>
      <div className="my-7 ">
        <Separator />
      </div>
      <CardContent>
        <div className=" flex gap-y-2 gap-x-2 flex-col lg:flex-row items-center justify-start">
          <Button
            asChild
            type="button"
            variant="secondary"
            size="lg"
            disabled={isPending}
            className="w-full lg:w-fit"
          >
            <Link href="/">Cancel</Link>
          </Button>
          <Button
            disabled={isPending}
            onClick={onSubmit}
            size="lg"
            className="w-full lg:w-fit"
          >
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JoinWorkspaceForm;
