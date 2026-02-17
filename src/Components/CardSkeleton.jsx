export default function CardSkeleton() {
	return (
		<div className="bg-[url(./Components/img/background-card.png)] w-full border-2 relative items-center justify-items-center border-white border-default rounded-sm shadow-xs animate-pulse">
			<div className="h-6 bg-amber-200	 rounded w-2/4 mx-auto mt-6 mb-2"></div>
			<div className="h-40 bg-amber-200	 rounded w-full md:h-50 md:w-60 mx-auto border-2 border-white">
				<div role="status" class="flex items-center justify-center h-48 max-w-sm bg-neutral-quaternary rounded-base animate-pulse mb-4 sm:mb-6">
					<svg class="w-11 h-11 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" /></svg>
					<span class="sr-only">Loading...</span>
				</div>
			</div>
			<div className="h-4 bg-amber-200	 rounded w-1/4 mx-auto mt-2"></div>
			<div className="h-4 bg-amber-200	 rounded w-2/4 mx-auto mt-5 mb-6"></div>
			<div className="my-4 border-2 h-auto w-5/6 mx-auto border-white rounded-xl bg-stone-900/80">
				<div className="p-3 w-3/4 mx-auto">
					<div className="h-4 bg-amber-200	 rounded w-full mb-2"></div>
					<div className="h-4 bg-amber-200	 rounded w-full mb-2"></div>
					<div className="h-4 bg-amber-200	 rounded w-full"></div>
				</div>
			</div>
		</div>

	);
}