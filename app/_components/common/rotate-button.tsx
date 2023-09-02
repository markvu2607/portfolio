"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type TRotateButtonProps = PropsWithChildren;

export function RotateButton({ children }: TRotateButtonProps) {
  return (
    <motion.div
      initial={false}
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{
        scale: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
