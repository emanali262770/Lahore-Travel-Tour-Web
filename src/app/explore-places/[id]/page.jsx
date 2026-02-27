import TourDetailPage from "@/components/ExploreSection/TourGuideDetail";

export default async function ExploreDetailPage({ params }) {
  const resolvedParams = await params;

  return (
    <div>
      <TourDetailPage id={resolvedParams.id} />
    </div>
  );
}