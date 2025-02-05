import Image from "next/image";
import Link from "next/link";



export default function Logo({ src }: { src: string }) {
  return (
    <div>
      <Link href="/">
        <Image src={src} alt="logo" width={110} height={110} />
      </Link>
    </div>
  );
}
