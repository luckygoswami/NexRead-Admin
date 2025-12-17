import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function AddBook() {
  return (
    <form
      action="#"
      className="grid grid-cols-2 gap-5">
      {/* Title Input */}
      <div className="col-span-2">
        <Label
          htmlFor="title"
          className="mb-2">
          Title
        </Label>
        <Input
          type="text"
          id="title"
          placeholder="Book Title"
        />
      </div>
      {/* Description Input */}
      <div className="col-span-2">
        <Label
          htmlFor="description"
          className="mb-2">
          Description
        </Label>
        <Textarea
          id="description"
          placeholder="Enter the Book description here"
          className="h-32"
        />
      </div>
      {/* Author-Name Input */}
      <div className="col-span-2 md:col-span-1">
        <Label
          htmlFor="author"
          className="mb-2">
          Author
        </Label>
        <Input
          id="author"
          placeholder="Book author"
        />
      </div>
      {/* Genre Input */}
      <div className="col-span-2 md:col-span-1">
        <Label
          htmlFor="genre"
          className="mb-2">
          Genre
        </Label>
        <Input
          id="genre"
          placeholder="Book genre"
        />
      </div>
      {/* Cover-image Input */}
      <div className="col-span-2 md:col-span-1">
        <Label
          htmlFor="cover-image"
          className="mb-2">
          Cover Image
        </Label>
        <Input
          id="cover-image"
          type="file"
          placeholder="Choose the cover image of a book."
        />
      </div>
      {/* Book-file Input */}
      <div className="col-span-2 md:col-span-1">
        <Label
          htmlFor="book-file"
          className="mb-2">
          Book pdf
        </Label>
        <Input
          id="book-file"
          type="file"
          placeholder="Choose the pdf file of a book."
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 col-start-2 justify-end">
        <Button
          variant="outline"
          type="reset"
          className="flex-1">
          Reset
        </Button>
        <Button
          variant="outline"
          className="flex-1">
          Cancel
        </Button>
        <Button
          type="submit"
          className="flex-1">
          Save
        </Button>
      </div>
    </form>
  );
}
