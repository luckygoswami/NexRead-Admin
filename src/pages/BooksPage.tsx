import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { deleteBook, getBooks } from '@/http/api';
import type { Book } from '@/types';
import { formatDate } from '@/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CirclePlus, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner';

export default function BooksPage() {
  const { data } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
    staleTime: 10000,
  });
  // TODO: handle loading and error states

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      });
      // TODO: add promise toast for success
      toast.success('Book successfully deleted.');
    },
    onError: () => {
      toast.error('Unable to delete book.');
    },
  });

  function handleDelete(bookId: Book['_id']) {
    console.log(bookId);
    mutate(bookId);
  }

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <span>
          <CardTitle>Books</CardTitle>
          <CardDescription>Manage your all books.</CardDescription>
        </span>
        <Link to="/dashboard/books/add">
          <Button>
            <CirclePlus className="size-5" />
            Add book
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead className="hidden md:table-cell">
                Author name
              </TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((book) => {
              return (
                <TableRow key={book._id}>
                  <TableCell className="hidden sm:table-cell">
                    <img
                      alt={book.title}
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={book.coverImage}
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{book.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{book.genre}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {book.author}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatDate(book.createdAt)}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>

                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <AlertDialog>
                            <AlertDialogTrigger>Delete</AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Are you absolutely sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will
                                  permanently delete this book and remove this
                                  book's data from our servers.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(book._id)}>
                                  Continue
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
