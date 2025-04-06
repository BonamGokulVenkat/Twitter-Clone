const ProfileHeaderSkeleton = () => {
	return (
		<div className="flex flex-col gap-2 w-full my-2 p-4 animate-pulse">
			<div className="flex gap-2 items-center">
				<div className="flex flex-1 gap-1">
					<div className="flex flex-col gap-1 w-full">
						<div className="bg-gray-300 dark:bg-gray-700 h-4 w-12 rounded-full"></div>
						<div className="bg-gray-300 dark:bg-gray-700 h-4 w-16 rounded-full"></div>
						<div className="bg-gray-300 dark:bg-gray-700 h-40 w-full relative rounded-md">
							<div className="bg-gray-400 dark:bg-gray-600 h-20 w-20 rounded-full border absolute -bottom-10 left-3"></div>
						</div>
						<div className="bg-gray-300 dark:bg-gray-700 h-6 mt-4 w-24 ml-auto rounded-full"></div>
						<div className="bg-gray-300 dark:bg-gray-700 h-4 w-14 rounded-full mt-4"></div>
						<div className="bg-gray-300 dark:bg-gray-700 h-4 w-20 rounded-full"></div>
						<div className="bg-gray-300 dark:bg-gray-700 h-4 w-2/3 rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProfileHeaderSkeleton;
