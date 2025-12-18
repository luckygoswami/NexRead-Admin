import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBook } from '@/http/api';
import { LoaderCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';

const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: 'Title must be atleast 2 characters long.' }),
  genre: z
    .string()
    .min(2, { message: 'Genre must be atleast 2 characters long.' }),
  author: z
    .string()
    .min(2, { message: 'Author name must be atleast 2 characters long.' }),
  description: z
    .string()
    .min(2, { message: 'Description must be atleast 2 characters long.' }),
  coverImage: z
    .instanceof(FileList)
    .refine((file) => file.length == 1, 'Cover Image is required.'),
  file: z
    .instanceof(FileList)
    .refine((file) => file.length == 1, 'Book PDF is required.'),
});

export default function AddBook() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      });
      navigate('/dashboard/books');
      toast.success('Book created successfully.');
    },
    onError: (err: any) => {
      toast.error(err.response?.data?.message ?? 'Something went wrong.');
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      genre: '',
      description: '',
      author: '',
    },
  });

  function submitHandler(values: z.infer<typeof formSchema>) {
    const formdata = new FormData();
    formdata.append('title', values.title);
    formdata.append('genre', values.genre);
    formdata.append('description', values.description);
    formdata.append('coverImage', values.coverImage[0]);
    formdata.append('file', values.file[0]);

    mutate(formdata);
  }

  const coverImageRef = form.register('coverImage');
  const bookFileRef = form.register('file');

  return (
    <Card className="p-8">
      <CardHeader>
        <CardTitle>Create a new book</CardTitle>
        <CardDescription>
          Fill out the form below to create a new book.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="grid grid-cols-2 gap-5">
          {/* Title Input */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Book Title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Description Input */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter the Book description here"
                    className="min-h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Author-Name Input */}
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Book author"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Genre Input */}
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Genre</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Book genre"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Cover-image Input */}
          <FormField
            control={form.control}
            name="coverImage"
            render={() => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Cover Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    placeholder="Choose the cover image of a book."
                    {...coverImageRef}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Book-file Input */}
          <FormField
            control={form.control}
            name="file"
            render={() => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormLabel>Book PDF</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    placeholder="Choose the pdf file of a book."
                    {...bookFileRef}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Action buttons */}
          <div className="flex gap-2 col-start-2 justify-end">
            <Button
              onClick={() => form.reset()}
              variant="outline"
              type="reset"
              className="flex-1">
              Reset
            </Button>
            <Link
              to={'/dashboard/books'}
              className="flex-1">
              <Button
                variant="outline"
                className="w-full">
                Cancel
              </Button>
            </Link>
            <Button
              disabled={isPending}
              type="submit"
              className="flex-1">
              <LoaderCircle
                className={`${!isPending && 'hidden'} animate-spin`}
              />
              Save
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
