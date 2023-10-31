import * as Types from "../../types.generated";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetShipListQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetOneShip = {
  vehicle?: {
    __typename?: "Vehicle";
    title?: any | null;
    description?: any | null;
    level?: number | null;
    icons?: {
      __typename?: "IconsVehicle";
      large?: any | null;
      medium?: any | null;
    } | null;
    type?: {
      __typename?: "VehicleType";
      name?: string | null;
      title?: any | null;
      icons?: { __typename?: "IconsVehicleClass"; default?: any | null } | null;
    } | null;
    nation?: {
      __typename?: "Nation";
      name?: string | null;
      title?: any | null;
      color?: any | null;
      icons?: {
        __typename?: "NationIcons";
        small?: any | null;
        medium?: any | null;
        large?: any | null;
      } | null;
    } | null;
  } | null;
};

export type GetAnotherShip = {
  __typename?: "Vehicle";
  title?: any | null;
  description?: any | null;
  level?: number | null;
  icons?: {
    __typename?: "IconsVehicle";
    large?: any | null;
    medium?: any | null;
  } | null;
  type?: {
    __typename?: "VehicleType";
    name?: string | null;
    title?: any | null;
    icons?: { __typename?: "IconsVehicleClass"; default?: any | null } | null;
  } | null;
  nation?: {
    __typename?: "Nation";
    name?: string | null;
    title?: any | null;
    color?: any | null;
    icons?: {
      __typename?: "NationIcons";
      small?: any | null;
      medium?: any | null;
      large?: any | null;
    } | null;
  } | null;
} | null;

export type GetShipListQuery = {
  __typename?: "GlossaryQuery";
  vehicles?: Array<{
    __typename?: "Vehicle";
    title?: any | null;
    description?: any | null;
    level?: number | null;
    icons?: {
      __typename?: "IconsVehicle";
      large?: any | null;
      medium?: any | null;
    } | null;
    type?: {
      __typename?: "VehicleType";
      name?: string | null;
      title?: any | null;
      icons?: { __typename?: "IconsVehicleClass"; default?: any | null } | null;
    } | null;
    nation?: {
      __typename?: "Nation";
      name?: string | null;
      title?: any | null;
      color?: any | null;
      icons?: {
        __typename?: "NationIcons";
        small?: any | null;
        medium?: any | null;
        large?: any | null;
      } | null;
    } | null;
  } | null> | null;
};

export const GetShipListDocument = gql`
  query getShipList {
    vehicles {
      title
      description
      icons {
        large
        medium
      }
      level
      type {
        name
        title
        icons {
          default
        }
      }
      nation {
        name
        title
        color
        icons {
          small
          medium
          large
        }
      }
    }
  }
`;

/**
 * __useGetShipListQuery__
 *
 * To run a query within a React component, call `useGetShipListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShipListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShipListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShipListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetShipListQuery,
    GetShipListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetShipListQuery, GetShipListQueryVariables>(
    GetShipListDocument,
    options,
  );
}
export function useGetShipListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetShipListQuery,
    GetShipListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetShipListQuery, GetShipListQueryVariables>(
    GetShipListDocument,
    options,
  );
}
export function useGetShipListSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetShipListQuery,
    GetShipListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetShipListQuery, GetShipListQueryVariables>(
    GetShipListDocument,
    options,
  );
}
export type GetShipListQueryHookResult = ReturnType<typeof useGetShipListQuery>;
export type GetShipListLazyQueryHookResult = ReturnType<
  typeof useGetShipListLazyQuery
>;
export type GetShipListSuspenseQueryHookResult = ReturnType<
  typeof useGetShipListSuspenseQuery
>;
export type GetShipListQueryResult = Apollo.QueryResult<
  GetShipListQuery,
  GetShipListQueryVariables
>;
