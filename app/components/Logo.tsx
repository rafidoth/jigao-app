import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";


export default function Logo({ src }: { src: string }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true)
  }, [theme])
  if (!mounted) return null
  return (
    <div className={`rounded rounded-md`}>
      <Link href="/">
        {mounted && <Image className={"rounded rounded-sm"} src={src} alt="logo" width={50} height={50} />}
      </Link>
    </div>
  );
}
