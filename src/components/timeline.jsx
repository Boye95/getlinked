import purplestar from "../assets/svgs/purplestar.svg";
import star from "../assets/svgs/star.svg";

export default function Timeline() {
  return (
    <div
      id="timeline"
      className="flex w-full flex-col items-center gap-32 px-32 py-11 bxl:px-20 xl:px-14 xs:gap-9 xs:px-8"
    >
      <div className="flex w-full justify-center ham:text-center">
        <div className="flex flex-col items-center gap-2 leading-tight text-white">
          <h3 className="font-clashbold text-[32px] ham:text-[28px] sm:text-[20px] ">Timeline</h3>
          <p className="font-montserrat text-sm">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
      </div>

      <div className="relative flex w-full flex-col text-white ">
        <img
          src={purplestar}
          alt=""
          className="absolute -top-16 left-[20%] w-5"
        />

        <img
          src={star}
          alt=""
          className="absolute bottom-4 left-6 w-4 opacity-30"
        />

        <div className="absolute left-1/2 h-full w-1 bg-[#D434FE]  xs:hidden"></div>

        <div className="relative mb-5 mt-11 flex w-full items-center justify-between gap-16 xs:flex-col xs:gap-4 ">
          <div className="absolute left-0 hidden h-full w-1 bg-[#D434FE] xs:flex ">
            <div className="absolute bottom-0 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#150E28] font-montserrat">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500">
                1
              </span>
            </div>
          </div>
          <div className="absolute left-[calc(50%-1.2rem)] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#150E28] font-montserrat xs:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500  ">
              1
            </span>
          </div>
          <div className="flex w-[40%] text-right xs:w-full xs:pl-5 xs:text-left">
            <div className="flex flex-col gap-2 leading-tight">
              <span className=" font-clashbold text-[20px] text-[#D434FE] xs:text-[18px]">
                Hackathon Announcement
              </span>
              <span className="font-montserrat text-sm">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </span>
            </div>
          </div>
          <div className="flex w-[40%] text-left font-clashbold text-[20px] text-[#D434FE] xs:w-full xs:pl-5 xs:text-[18px]">
            November 18, 2023
          </div>
        </div>

        <div className="relative my-5 flex w-full items-center justify-between gap-16 xs:flex-col-reverse xs:gap-4 ">
          <div className="absolute left-0 hidden h-full w-1 bg-[#D434FE] xs:flex ">
            <div className="absolute bottom-0 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#150E28] font-montserrat">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500">
                2
              </span>
            </div>
          </div>
          <div className="absolute left-[calc(50%-1.2rem)] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#150E28] font-montserrat xs:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500  ">
              2
            </span>
          </div>
          <div className="flex w-[40%] justify-end font-clashbold text-[20px] text-[#D434FE] xs:w-full xs:justify-start  xs:pl-5 xs:text-[18px]">
            November 18, 2023
          </div>
          <div className="flex w-[40%] text-left xs:w-full xs:pl-5">
            <div className="flex flex-col gap-2 leading-tight">
              <span className=" font-clashbold text-[20px] text-[#D434FE] xs:text-[18px]">
                Teams Registration begins
              </span>
              <span className="font-montserrat text-sm">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </span>
            </div>
          </div>
        </div>

        <div className="relative my-5 flex w-full items-center justify-between gap-16 xs:flex-col xs:gap-4 ">
          <img src={star} alt="" className="absolute right-6 top-4 w-4" />

          <div className="absolute left-0 hidden h-full w-1 bg-[#D434FE] xs:flex ">
            <div className="absolute bottom-0 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#150E28] font-montserrat">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500">
                3
              </span>
            </div>
          </div>
          <div className="absolute left-[calc(50%-1.2rem)] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#150E28] font-montserrat xs:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500  ">
              3
            </span>
          </div>
          <div className="flex w-[40%] text-right xs:w-full xs:pl-5 xs:text-left">
            <div className="flex w-full flex-col gap-2 leading-tight">
              <span className=" font-clashbold text-[20px] text-[#D434FE] xs:text-[18px]">
                Teams Registration ends
              </span>
              <span className="font-montserrat text-sm">
                Interested Participants are no longer Allowed to register
              </span>
            </div>
          </div>
          <div className="flex w-[40%] text-left font-clashbold text-[20px] text-[#D434FE] xs:w-full xs:pl-5 xs:text-[18px]">
            November 18, 2023
          </div>
        </div>

        <div className="relative my-5 flex w-full items-center justify-between gap-16 xs:flex-col-reverse xs:gap-4 ">
          <div className="absolute left-0 hidden h-full w-1 bg-[#D434FE] xs:flex ">
            <div className="absolute bottom-0 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#150E28] font-montserrat">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500">
                4
              </span>
            </div>
          </div>
          <div className="absolute left-[calc(50%-1.2rem)] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#150E28] font-montserrat xs:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500  ">
              4
            </span>
          </div>
          <div className="flex w-[40%] justify-end font-clashbold text-[20px] text-[#D434FE] xs:w-full xs:justify-start  xs:pl-5 xs:text-[18px]">
            November 18, 2023
          </div>
          <div className="flex w-[40%] text-left xs:w-full xs:pl-5">
            <div className="flex flex-col gap-2 leading-tight">
              <span className=" font-clashbold text-[20px] text-[#D434FE] xs:text-[18px]">
                Announcement of the accepted teams and ideas
              </span>
              <span className="font-montserrat text-sm">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </span>
            </div>
          </div>
        </div>

        <div className="relative my-5 flex w-full items-center justify-between gap-16 xs:flex-col xs:gap-4  ">
          <div className="absolute left-0 hidden h-full w-1 bg-[#D434FE] xs:flex ">
            <div className="absolute bottom-0 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#150E28] font-montserrat">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500">
                5
              </span>
            </div>
          </div>
          <div className="absolute left-[calc(50%-1.2rem)] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#150E28] font-montserrat xs:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500  ">
              5
            </span>
          </div>
          <div className="flex w-[40%] text-right xs:w-full xs:pl-5 xs:text-left">
            <div className="flex flex-col gap-2 leading-tight">
              <span className=" font-clashbold text-[20px] text-[#D434FE] xs:text-[18px]">
                Getlinked Hackathon 1.0 Offically Begins
              </span>
              <span className="font-montserrat text-sm">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </span>
            </div>
          </div>
          <div className="flex w-[40%] text-left font-clashbold text-[20px] text-[#D434FE] xs:w-full xs:pl-5 xs:text-[18px]">
            November 18, 2023
          </div>
        </div>

        <div className="relative mb-0 mt-5 flex w-full items-center justify-between gap-16 xs:flex-col-reverse xs:gap-4 ">
          <div className="absolute left-0 hidden h-full w-1 bg-[#D434FE] xs:flex ">
            <div className="absolute bottom-0 left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#150E28] font-montserrat">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500">
                6
              </span>
            </div>
          </div>
          <div className="absolute left-[calc(50%-1.2rem)] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#150E28] font-montserrat xs:hidden">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500  ">
              6
            </span>
          </div>
          <div className="flex w-[40%] justify-end font-clashbold text-[20px] text-[#D434FE] xs:w-full xs:justify-start  xs:pl-5 xs:text-[18px]">
            November 18, 2023
          </div>
          <div className="flex w-[40%] text-left xs:w-full xs:pl-5">
            <div className="flex flex-col gap-2 leading-tight">
              <span className=" font-clashbold text-[20px] text-[#D434FE] xs:text-[18px]">
                Demo Day
              </span>
              <span className="font-montserrat text-sm">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
