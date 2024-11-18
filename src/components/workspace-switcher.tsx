"use client";

import { RiAddCircleFill } from "react-icons/ri";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { useCreateWorkspaceModal } from "@/features/workspaces/hooks/use-create-workspace-modal";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { WorkspaceAvatar } from "@/features/workspaces/components/workspace-avatar";

const WorkspaceSwitcher = () => {
  const workspaceId = useWorkspaceId();
  const router = useRouter();
  const { data: workspaces } = useGetWorkspaces();
  const { open } = useCreateWorkspaceModal();

  const onSelect = (id: string) => {
    router.push(`/workspaces/${id}`);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase  font-bold">Workspaces</p>
        <RiAddCircleFill
          onClick={open}
          className="size-5  cursor-pointer hover:opacity-75 transition"
        />
      </div>
      {workspaces?.total && workspaces?.total > 0 ? (
        <Select onValueChange={onSelect} value={workspaceId}>
          <SelectTrigger className="w-full bg-neutral-200 dark:bg-gray-900  font-medium p-1">
            <SelectValue placeholder="No workspace selected"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            {workspaces?.documents.map((workspace) => (
              <SelectItem
                className="cursor-pointer"
                value={workspace.$id}
                key={workspace.$id}
              >
                <div className="flex justify-start items-center gap-3 font-medium ">
                  <WorkspaceAvatar
                    name={workspace.name}
                    image={workspace.imageUrl}
                  />
                  <span className="truncate">{workspace.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : null}
    </div>
  );
};

export default WorkspaceSwitcher;
