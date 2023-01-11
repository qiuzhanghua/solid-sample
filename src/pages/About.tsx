import { styled } from "solid-stitches";

const Button = styled("button", {
  backgroundColor: "lightblue",
  borderRadius: "1em",
  fontSize: "16px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "blue"
  },
  color: "white"
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
