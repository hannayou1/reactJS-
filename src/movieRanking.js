export function getMoviesByOverallRank(movies) {
    return [...movies]
        .sort((first, second) =>
            second.audience - first.audience ||
            second.box_office_revenue - first.box_office_revenue ||
            first.id - second.id
        )
        .map((movie, index) => ({ ...movie, overallRank: index + 1 }));
}
