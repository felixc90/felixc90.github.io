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
        <div className="hover:underline hover:cursor-pointer">CHOOSE THEME</div>
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
