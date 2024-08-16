import * as React from "react";

import { Button } from "@/app/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/app/ui/drawer";

export const ContentDrawer = ({
  children,
  buttonLabel,
}: {
  children: React.ReactNode;
  buttonLabel: string;
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">{buttonLabel}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm justify-center">{children}</div>
      </DrawerContent>
    </Drawer>
  );
};
