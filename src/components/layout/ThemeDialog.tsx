import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";

const ThemeDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="hover:underline hover:cursor-pointer">
          CHOOSE THEME{" "}
          <span className="font-accent text-lg sm:text-2xl">✨</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select a website theme</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ThemeDialog;
