import purplestar from "../assets/svgs/purplestar.svg";

export default function Timeline() {
  return (
    <div className="w-full px-32 py-11 flex flex-col gap-32 items-center">
      <div className="flex w-full justify-center">
        <div className="text-white flex flex-col gap-2 items-center leading-tight">
          <h3 className="text-[32px] font-clashbold ">Timeline</h3>
          <p className="text-[14px] font-montserrat">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col text-white relative ">
        <div className="w-1 h-full bg-[#D434FE] absolute left-1/2"></div>

        <div className="flex w-full justify-between items-center gap-16 my-11 relative ">
          <div className="w-11 h-11 z-10 font-montserrat rounded-full flex justify-center items-center bg-[#150E28] absolute left-[calc(50%-1.2rem)]">
            <span className="w-8 h-8 rounded-full flex justify-center items-center bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 ">
              1
            </span>
          </div>
          <div className="w-[40%] flex text-right">
            <div className="flex flex-col gap-2 leading-tight">
              <span className=" font-clashbold text-[20px] text-[#D434FE]">
                Hackathon Announcement
              </span>
              <span className="font-montserrat text-[14px]">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </span>
              {/* <img
                src={purplestar}
                alt=""
                className="w-5 absolute right-0 top-6"
              /> */}
            </div>
          </div>
          <div className="w-[40%] flex text-left font-clashbold text-[20px] text-[#D434FE]">
            November 18, 2023
          </div>
        </div>

        <div className="flex w-full justify-between gap-11 ">
          <div className="w-1/2 flex justify-end">djdjd</div>
          <div className="w-1/2">ddhhdhd</div>
        </div>
      </div>
    </div>
  );
}
