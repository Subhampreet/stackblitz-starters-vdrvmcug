import Editor from '@/components/Editor';
import Review from '@/components/Review';

export default function Home() {
  return (
    <div className='flex h-full w-full items-center justify-center overflow-hidden'>
      <Editor />
      <Review />
    </div>
  );
}
