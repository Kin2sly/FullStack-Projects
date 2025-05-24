import type { TodoPreviewCardType } from "~/types/TodoPreviewCardsType";
import { Tag } from "./Tags";

export function TodoPreviewCard({
  id,
  description,
  title,
}: TodoPreviewCardType) {
  return (
    <div className="flex flex-row p-2 rounded-sm ring-1 ring-slate-300 justify-between cursor-pointer">
      {/* Circle and the title+desc */}
      <div className="flex flex-row gap-3 w-2/3 overflow-clip items-center">
        {/* circle here */}
        <div className="max-w-1/3">
          <div className="h-6 w-6 rounded-full border-3 border-red-500" />
        </div>

        {/* title and the desc */}
        <div className="inline-flex flex-col gap-[0.5px] overflow-hidden ">
          <div className="max-w-2/3">
            <h2 className="text-lg font-bold truncate">{title}</h2>
          </div>
          <div className="max-w-2/3">
            <p className="text-slate-500 truncate">{description}</p>
          </div>
        </div>
      </div>

      {/* tags */}
      <div className="flex flex-row gap-1 w-[30%] items-center justify-end font-bold">
        <Tag tagText="Tag1" />
        <Tag tagText="Tag1" />
        <Tag tagText="Tag1" />
      </div>
    </div>
  );
}
