# DECISIONS.md

## 1. How did your debounce work? What happens if the user keeps typing before the 300ms is up?

I created a custom debounce hook using `useEffect` and `setTimeout`. Every time the user types, a new timer starts. If the user types another character before 300ms has passed, the previous timer is cleared with `clearTimeout()` and a new one begins. This means the search only updates after the user stops typing for 300ms, reducing unnecessary filtering.

## 2. Where does your filter state live in the component tree, and why there and not somewhere else?

The filter state lives inside the `App` component because it is shared by multiple components such as the search input, filters, sort dropdown, results counter, and car grid. Keeping the state in one place makes it easier to manage and pass data to child components through props.

## 3. Walk through, step by step, what happens when the page loads with filters already present in the URL.

When the page loads, the application reads the query parameters from the URL using `useSearchParams`. These values become the initial state for the search, filters, availability option, and sorting. The filtered list is then calculated using those values, so the user immediately sees the same view that was previously selected. If the page is refreshed, the same state is restored from the URL.

## 4. If you had one more day, what is the first thing you'd refactor, and why?

If I had one more day, I would separate the filtering and sorting logic into a custom hook. This would make the `App` component smaller, easier to read, and easier to maintain. It would also make the filtering logic reusable if the project grows in the future.
