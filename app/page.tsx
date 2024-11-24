import Link from "next/link";
import Features from "./_components/Sections/Features";
import Introduction from "./_components/Sections/Introduction";

export default function Home() {
    return (
        <div>
            <div className="grid min-h-screen place-items-center bg-white py-20 text-black">
                <div className="container flex min-h-[50vh] flex-col justify-center gap-y-20 text-center">
                    <h1 className="fs-40-85">
                        <Link
                            href={"https://www.cielia.com/m/special/plus/"}
                            target="_blank"
                            className="underline transition duration-300 hover:text-blue-600">
                            Cielia
                        </Link>{" "}
                        Replication
                    </h1>

                    <div className="flex items-center justify-center gap-x-5 text-center fs-25-43">
                        <Link
                            href={
                                "https://github.com/PhanDangKhoa96/cielia-replication"
                            }
                            target="_blank"
                            className="hover:underline">
                            Source code
                        </Link>
                        <span>|</span>
                        <Link
                            href={"https://www.pldkhoa.dev/playground"}
                            target="_blank"
                            className="hover:underline">
                            All demos
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container grid h-screen place-items-center lg:hidden">
                <h2 className="text-balance uppercase fs-38-56">
                    Apologies, this screen is currently not optimized for mobile
                    devices and is only available for screens wider than 1024px.
                </h2>
            </div>

            <div className="hidden space-y-52 lg:block">
                <Introduction />
                <Features />
            </div>

            <div className="container grid h-screen place-items-center">
                <h2 className="text-balance uppercase fs-40-85">
                    Stay tuned for more demos and features!
                </h2>
            </div>
        </div>
    );
}
