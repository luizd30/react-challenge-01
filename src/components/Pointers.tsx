import { PointersType, SizeType } from "../types";
import { percentage } from "../utils/percentage";

type Props = { pointers: PointersType; containerSize: SizeType };

const SIZES = { width: 20, height: 20 };

export const Pointers = ({ pointers, containerSize }: Props) => {
  const { width, height } = containerSize;

  return pointers.map(({ id, positions }) => (
    <span
      className="pointer"
      onClick={(e) => e.stopPropagation()}
      key={id}
      style={{
        left: `${percentage(width, SIZES.height, positions.x)}px`,
        top: `${percentage(height, SIZES.width, positions.y)}px`,
      }}
    />
  ));
};
