import { styled } from "../stitches.config";

const Button = styled("button", {
  backgroundColor: "lightblue",
  borderRadius: "$xl",
  fontSize: "16px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "blue"
  },
  marginLeft: "1em",
  color: "$indigo100"
});

export default function () {
  return (
    <>
      <div class="m-3">
        Learn SolidJS<p>邱张华</p>
      </div>
      <Button>Stitches</Button>
    </>
  );
}
