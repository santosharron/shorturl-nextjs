import { toast } from 'sonner';
import QRCode from "qrcode.react";
import { Card, CardContent, CardFooter } from '@/components/ui/card'; // Adjust import path as necessary
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function DetailsCard({ longURL, unique }) {
    const shortenedURL = `${typeof window !== 'undefined' ? window.location.origin : ''}/${unique}`;
    
    function copyToClipboard() {
        const inputField = document.getElementById('shortURL');
        inputField.select();
        document.execCommand('copy');
        inputField.setSelectionRange(0, 0);

        toast.success('Copied to clipboard', {
            duration: 1500,
            action: {
                label: 'Undo',
                onClick: () => console.log('Undo clicked')
            }
        });
    }

    return (
        <section className="flex items-center justify-center">
    <Card className="w-full md:w-4/6 mb-12">
        <CardContent>
            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
                <span className="font-medium">Success</span> Cut-Off your long URL!
            </div>

            <div className="mb-4">
                <Label htmlFor="longURL">Long URL</Label>
                <Input
                    id="longURL"
                    type="text"
                    value={longURL}
                    readOnly
                    className="mt-1"
                />
            </div>

            <div className="mb-4">
                <Label htmlFor="shortURL">Shortened URL</Label>
                <div className="flex items-center">
                    <Input
                        id="shortURL"
                        type="text"
                        value={shortenedURL}
                        readOnly
                        className="mt-1"
                    />
                    <Button 
                        className="text-white rounded px-3 py-3 ml-2" 
                        onClick={copyToClipboard}
                    >
                        Copy
                    </Button>
                </div>
            </div>

            <div className="mb-4">
                <Label htmlFor="qr-gen">QR Code</Label>
                <QRCode 
                    id="qr-gen"
                    value={shortenedURL} 
                    size={182}
                    level={"H"}
                    includeMargin={true}
                />
            </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between mt-4">
            <a
                href="../../"
                className="bg-black hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Shorten another Long URL
            </a>
        </CardFooter>
    </Card>
</section>

    )
}