import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30, // 30 minutos
      retry: (failureCount, error) => {
        if (error instanceof Response && error.status === 404) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});
