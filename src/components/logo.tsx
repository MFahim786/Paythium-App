import Image from "next/image";
interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconOnly?: boolean;
}

export default function Logo({ iconOnly = false, ...props }: IconProps) {
  return (
    <div>
       <Image
            src={
              require('../../public/Paythium_icon.jpeg')
            }
            alt="Sign Up Thumbnail"
            fill
            priority
            sizes="(max-width: 100px) 100vw"
            className="object-cover"
          />
   
    </div>
  );
}
