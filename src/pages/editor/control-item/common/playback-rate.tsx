import { Button } from "@/components/button";
import { Label } from "@/components/ui/label";
import { EDIT_OBJECT, dispatch } from "@designcombo/events";
import { ITrackItem } from "@designcombo/types";

export default function PlaybackRate({ trackItem }: { trackItem: ITrackItem }) {
  const handleChangePlaybackRate = (value: number) => {
    dispatch(EDIT_OBJECT, {
      payload: {
        [trackItem.id]: {
          playbackRate: value
        }
      }
    });
  };
  return (
    <div className="flex flex-col gap-2 py-4">
      <Label className="font-sans text-muted-foreground text-xs font-semibold">
        Aspect ratio
      </Label>
      <div className="flex">
        <Button
          variant="outline"
          onClick={() => {
            handleChangePlaybackRate(0.5);
          }}
        >
          x0.5
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            handleChangePlaybackRate(1);
          }}
        >
          x1
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            handleChangePlaybackRate(1.5);
          }}
        >
          x1.5
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            handleChangePlaybackRate(2);
          }}
        >
          x2
        </Button>
      </div>
    </div>
  );
}
