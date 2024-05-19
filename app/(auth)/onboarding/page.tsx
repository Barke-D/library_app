import { currentUser } from "@clerk/nextjs/server";
import AccountProfile from "@/components/forms/AccountProfile";

interface Props {}

const Page = async (props: Props) => {
  const user = await currentUser();

  const userInfo = {};

  // const userData = {
  //   id: user?.id,
  //   objectId: userInfo?._id,
  //   username: userInfo?.username || user?.username,
  //   name: userInfo?.name || user?.firstName || "",
  //   bio: userInfo?.bio || "",
  //   image: userInfo?.image || user?.imageUrl,
  // };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text text-black">Onboarding</h1>
      <p className="mt-3 text-base-regular">
        Complete your profile now to use DigitalLab
      </p>

      <section className="rounded-md mt-9 shadow-lg shadow-indigo-500/40 p-10">
        {/* <AccountProfile user={} btnTitle="Continue" /> */}
      </section>
    </main>
  );
};

export default Page;
