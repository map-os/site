import Image from "next/image"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <Image src="/img/logo.png" alt="Map-OS" width={148} height={29} priority className="dark:hidden" />
      <Image src="/img/logo-light.png" alt="Map-OS" width={148} height={29} priority className="hidden dark:block" />
    </span>
  )
}
