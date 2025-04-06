const PostSkeleton = () => {
	return (
		<div className="flex flex-col gap-4 w-full p-4 animate-pulse">
			<div className="flex gap-4 items-center">
				<div className="bg-gray-300 dark:bg-gray-700 w-10 h-10 rounded-full shrink-0"></div>
				<div className="flex flex-col gap-2">
					<div className="bg-gray-300 dark:bg-gray-700 h-2 w-12 rounded-full"></div>
					<div className="bg-gray-300 dark:bg-gray-700 h-2 w-24 rounded-full"></div>
				</div>
			</div>
			<div className="bg-gray-300 dark:bg-gray-700 h-40 w-full rounded-md"></div>
		</div>
	);
};
export default PostSkeleton;
