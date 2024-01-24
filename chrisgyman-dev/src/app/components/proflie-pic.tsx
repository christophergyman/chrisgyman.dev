import Image from "next/image";

export function Avatar() {
  return (
    <div className="">
      <Image
        className="rounded-full overflow-auto"
        src={"/profilePIc.jpeg"}
        alt="ProfilePicture"
        width="300"
        height="300"
      />
    </div>
  );
}
