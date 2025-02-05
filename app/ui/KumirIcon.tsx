import Image from 'next/image'
export function Kumir({ className }: { className: string }) {
  return <div
    className={className}
  >
    <Image
      src="/kumir.png"
      width={500}
      height={500}
      alt="Kumir"
    />
  </div>
}
