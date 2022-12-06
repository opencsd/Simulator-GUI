package models

type Table struct {
	QueryName               string `json:"queryName"`
	BASIC_SNIPPET           int    `json:"basicSnippet"`
	AGGREGATION_SNIPPET     int    `json:"aggregationSnippet"`
	JOIN_SNIPPET            int    `json:"joinSnippet"`
	SUBQUERY_SNIPPET        int    `json:"subquerySnippet"`
	DEPENDENCY_SNIPPET      int    `json:"dependencySnippet"`
	HAVING_SNIPPET          int    `json:"havingSnippet"`
	LEFT_OUTER_JOIN_SNIPPET int    `json:"leftOuterJoinSnippet"`
}

type Analyze struct {
	QueryName   string `json:"queryName"`
	Aggregation int    `json:"aggregation"`
	Join        int    `json:"join"`
	SubQuery    int    `json:"subQuery"`
	GroupBy     int    `json:"groupBy"`
	OrderBy     int    `json:"orderBy"`
}

type AnalyzeResp struct {
	QueryName   string  `json:"queryName"`
	Aggregation float32 `json:"aggregation"`
	Join        float32 `json:"join"`
	SubQuery    float32 `json:"subQuery"`
	GroupBy     float32 `json:"groupBy"`
	OrderBy     float32 `json:"orderBy"`
}
