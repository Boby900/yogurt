import { Header } from "@/components/Header";
import ProfileForm from "@/components/Form";
export default function page() {
  return (
    <div>
      <Header />
      <main className="flex flex-1 flex-col  gap-4 p-4 lg:gap-6 lg:p-6">
        <div
          className="flex flex-1   justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <ProfileForm />
        </div>
      </main>
    </div>
  );
}
