import { useGetAllSubmissions, useIsCallerAdmin } from '@/hooks/useQueries';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, Mail, User, Clock, Inbox } from 'lucide-react';

export default function AdminSubmissionsPanel() {
  const { data: isAdmin, isLoading: isAdminLoading } = useIsCallerAdmin();
  const { data: submissions, isLoading: submissionsLoading } = useGetAllSubmissions();

  if (isAdminLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <p className="text-gray-600">Checking permissions...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <Alert className="bg-red-50 border-red-200">
        <AlertCircle className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          Access denied. Admin privileges required to view submissions.
        </AlertDescription>
      </Alert>
    );
  }

  if (submissionsLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <p className="text-gray-600">Loading submissions...</p>
      </div>
    );
  }

  if (!submissions || submissions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <Inbox className="h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-600">No contact submissions yet.</p>
      </div>
    );
  }

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleString();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Contact Submissions</h3>
        <span className="text-sm text-gray-600">{submissions.length} total</span>
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="space-y-4 pr-4">
          {submissions.map((submission, index) => (
            <Card key={index} className="bg-white/80 border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-600" />
                  {submission.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  {submission.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  {formatDate(submission.timestamp)}
                </div>
                <Separator className="bg-gray-200" />
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{submission.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
