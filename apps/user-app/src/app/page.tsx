
import  prisma  from "@repo/db";

const user = await prisma.user.findFirst();

export default function Home() {
  return (
    <div className="text-fuchsia-600"> hello </div>
  );
}
