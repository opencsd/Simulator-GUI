package models

type SnippetRequest_SnippetType int

const (
	SnippetRequest_BASIC_SNIPPET                SnippetRequest_SnippetType = 0
	SnippetRequest_AGGREGATION_SNIPPET          SnippetRequest_SnippetType = 1
	SnippetRequest_JOIN_SNIPPET                 SnippetRequest_SnippetType = 2
	SnippetRequest_SUBQUERY_SNIPPET             SnippetRequest_SnippetType = 3
	SnippetRequest_DEPENDENCY_EXIST_SNIPPET     SnippetRequest_SnippetType = 4
	SnippetRequest_DEPENDENCY_NOT_EXIST_SNIPPET SnippetRequest_SnippetType = 5
	SnippetRequest_DEPENDENCY_OPER_SNIPPET      SnippetRequest_SnippetType = 6
	SnippetRequest_DEPENDENCY_IN_SNIPPET        SnippetRequest_SnippetType = 7
	SnippetRequest_HAVING_SNIPPET               SnippetRequest_SnippetType = 8
	SnippetRequest_LEFT_OUTER_JOIN_SNIPPET      SnippetRequest_SnippetType = 9 //임시 데모 이후 번호 변경예정
)

// Enum value maps for SnippetRequest_SnippetType.
var (
	SnippetRequest_SnippetType_name = map[int]string{
		0: "BASIC_SNIPPET",
		1: "AGGREGATION_SNIPPET",
		2: "JOIN_SNIPPET",
		3: "SUBQUERY_SNIPPET",
		4: "DEPENDENCY_EXIST_SNIPPET",
		5: "DEPENDENCY_NOT_EXIST_SNIPPET",
		6: "DEPENDENCY_OPER_SNIPPET",
		7: "DEPENDENCY_IN_SNIPPET",
		8: "HAVING_SNIPPET",
		9: "LEFT_OUTER_JOIN_SNIPPET",
	}
	SnippetRequest_SnippetType_value = map[string]int{
		"BASIC_SNIPPET":                0,
		"AGGREGATION_SNIPPET":          1,
		"JOIN_SNIPPET":                 2,
		"SUBQUERY_SNIPPET":             3,
		"DEPENDENCY_EXIST_SNIPPET":     4,
		"DEPENDENCY_NOT_EXIST_SNIPPET": 5,
		"DEPENDENCY_OPER_SNIPPET":      6,
		"DEPENDENCY_IN_SNIPPET":        7,
		"HAVING_SNIPPET":               8,
		"LEFT_OUTER_JOIN_SNIPPET":      9,
	}
)

type Snippet_ValueType int

const (
	Snippet_INT8      Snippet_ValueType = 0
	Snippet_INT16     Snippet_ValueType = 1
	Snippet_int       Snippet_ValueType = 2 //DEFAULT
	Snippet_INT64     Snippet_ValueType = 3
	Snippet_FLOAT32   Snippet_ValueType = 4
	Snippet_FLOAT64   Snippet_ValueType = 5
	Snippet_NUMERIC   Snippet_ValueType = 6
	Snippet_DATE      Snippet_ValueType = 7
	Snippet_TIMESTAMP Snippet_ValueType = 8
	Snippet_STRING    Snippet_ValueType = 9
	Snippet_COLUMN    Snippet_ValueType = 10
	Snippet_OPERATOR  Snippet_ValueType = 11 //value string으로 연산자 확인
)

// Enum value maps for Snippet_ValueType.
var (
	Snippet_ValueType_name = map[int]string{
		0:  "INT8",
		1:  "INT16",
		2:  "int",
		3:  "INT64",
		4:  "FLOAT32",
		5:  "FLOAT64",
		6:  "NUMERIC",
		7:  "DATE",
		8:  "TIMESTAMP",
		9:  "STRING",
		10: "COLUMN",
		11: "OPERATOR",
	}
	Snippet_ValueType_value = map[string]int{
		"INT8":      0,
		"INT16":     1,
		"int":       2,
		"INT64":     3,
		"FLOAT32":   4,
		"FLOAT64":   5,
		"NUMERIC":   6,
		"DATE":      7,
		"TIMESTAMP": 8,
		"STRING":    9,
		"COLUMN":    10,
		"OPERATOR":  11,
	}
)

type Snippet_Filter_OperType int

const (
	Snippet_Filter_KETI_DEFAULT       Snippet_Filter_OperType = 0 //DEFAULT
	Snippet_Filter_KETI_GE            Snippet_Filter_OperType = 1
	Snippet_Filter_KETI_LE            Snippet_Filter_OperType = 2
	Snippet_Filter_KETI_GT            Snippet_Filter_OperType = 3
	Snippet_Filter_KETI_LT            Snippet_Filter_OperType = 4
	Snippet_Filter_KETI_ET            Snippet_Filter_OperType = 5
	Snippet_Filter_KETI_NE            Snippet_Filter_OperType = 6
	Snippet_Filter_KETI_LIKE          Snippet_Filter_OperType = 7
	Snippet_Filter_KETI_BETWEEN       Snippet_Filter_OperType = 8
	Snippet_Filter_KETI_IN            Snippet_Filter_OperType = 9
	Snippet_Filter_KETI_IS            Snippet_Filter_OperType = 10
	Snippet_Filter_KETI_ISNOT         Snippet_Filter_OperType = 11
	Snippet_Filter_KETI_NOT           Snippet_Filter_OperType = 12
	Snippet_Filter_KETI_AND           Snippet_Filter_OperType = 13
	Snippet_Filter_KETI_OR            Snippet_Filter_OperType = 14
	Snippet_Filter_KETI_BRACKET_OPEN  Snippet_Filter_OperType = 15
	Snippet_Filter_KETI_BRACKET_CLOSE Snippet_Filter_OperType = 16
	Snippet_Filter_KETI_SUBSTRING     Snippet_Filter_OperType = 17 //임시 데모 이후 제거예정
)

type Snippet_Projection_SelectType int

const (
	Snippet_Projection_COLUMNNAME Snippet_Projection_SelectType = 0 //DEFAULT
	Snippet_Projection_SUM        Snippet_Projection_SelectType = 1
	Snippet_Projection_AVG        Snippet_Projection_SelectType = 2
	Snippet_Projection_COUNT      Snippet_Projection_SelectType = 3
	Snippet_Projection_COUNTSTAR  Snippet_Projection_SelectType = 4
	Snippet_Projection_TOP        Snippet_Projection_SelectType = 5
	Snippet_Projection_MIN        Snippet_Projection_SelectType = 6
	Snippet_Projection_MAX        Snippet_Projection_SelectType = 7
)

// Enum value maps for Snippet_Projection_SelectType.
var (
	Snippet_Projection_SelectType_name = map[int]string{
		0: "COLUMNNAME",
		1: "SUM",
		2: "AVG",
		3: "COUNT",
		4: "COUNTSTAR",
		5: "TOP",
		6: "MIN",
		7: "MAX",
	}
	Snippet_Projection_SelectType_value = map[string]int{
		"COLUMNNAME": 0,
		"SUM":        1,
		"AVG":        2,
		"COUNT":      3,
		"COUNTSTAR":  4,
		"TOP":        5,
		"MIN":        6,
		"MAX":        7,
	}
)

// Enum value maps for Snippet_Filter_OperType.
var (
	Snippet_Filter_OperType_name = map[int]string{
		0:  "KETI_DEFAULT",
		1:  "KETI_GE",
		2:  "KETI_LE",
		3:  "KETI_GT",
		4:  "KETI_LT",
		5:  "KETI_ET",
		6:  "KETI_NE",
		7:  "KETI_LIKE",
		8:  "KETI_BETWEEN",
		9:  "KETI_IN",
		10: "KETI_IS",
		11: "KETI_ISNOT",
		12: "KETI_NOT",
		13: "KETI_AND",
		14: "KETI_OR",
		15: "KETI_BRACKET_OPEN",
		16: "KETI_BRACKET_CLOSE",
		17: "KETI_SUBSTRING",
	}
	Snippet_Filter_OperType_value = map[string]int{
		"KETI_DEFAULT":       0,
		"KETI_GE":            1,
		"KETI_LE":            2,
		"KETI_GT":            3,
		"KETI_LT":            4,
		"KETI_ET":            5,
		"KETI_NE":            6,
		"KETI_LIKE":          7,
		"KETI_BETWEEN":       8,
		"KETI_IN":            9,
		"KETI_IS":            10,
		"KETI_ISNOT":         11,
		"KETI_NOT":           12,
		"KETI_AND":           13,
		"KETI_OR":            14,
		"KETI_BRACKET_OPEN":  15,
		"KETI_BRACKET_CLOSE": 16,
		"KETI_SUBSTRING":     17,
	}
)

type Snippet_Order_OrderDirection int

const (
	Snippet_Order_ASC  Snippet_Order_OrderDirection = 0 //DEFAULT
	Snippet_Order_DESC Snippet_Order_OrderDirection = 1
)

// Enum value maps for Snippet_Order_OrderDirection.
var (
	Snippet_Order_OrderDirection_name = map[int]string{
		0: "ASC",
		1: "DESC",
	}
	Snippet_Order_OrderDirection_value = map[string]int{
		"ASC":  0,
		"DESC": 1,
	}
)

type SnippetRequest struct {
	Id      string                     `json:"_id,omitempty" bson:"_id,omitempty"`
	Type    SnippetRequest_SnippetType `json:"type,omitempty"`
	Snippet *Snippet                   `json:"snippet,omitempty"`
}
type Snippet struct {
	Query_ID         int                   `json:"queryID,omitempty"`
	Work_ID          int                   `json:"workID,omitempty"`
	TableName        []string              `json:"tableName,omitempty"`
	TableCol         []string              `json:"tableCol,omitempty"`
	TableFilter      []*Snippet_Filter     `json:"tableFilter,omitempty"`
	Dependency       *Snippet_Dependency   `json:"dependency,omitempty"`
	TableOffset      []int                 `json:"tableOffset,omitempty"`
	TableOfflen      []int                 `json:"tableOfflen,omitempty"`
	TableDatatype    []int                 `json:"tableDatatype,omitempty"`
	TableAlias       string                `json:"tableAlias,omitempty"`
	ColumnAlias      []string              `json:"columnAlias,omitempty"`
	ColumnProjection []*Snippet_Projection `json:"columnProjection,omitempty"`
	ColumnFiltering  []string              `json:"columnFiltering,omitempty"`
	GroupBy          []string              `json:"groupBy,omitempty"`
	OrderBy          *Snippet_Order        `json:"orderBy,omitempty"`
	Limit            int                   `json:"limit,omitempty"`
}

type Snippet_Filter struct {
	LV       *Snippet_Filter_FilterValue   `json:"LV,omitempty"`
	Operator Snippet_Filter_OperType       `json:"Operator,omitempty"`
	RV       *Snippet_Filter_FilterValue   `json:"RV,omitempty"`
	EXTRA    []*Snippet_Filter_FilterValue `json:"EXTRA,omitempty"`
}

type Snippet_Filter_FilterValue struct {
	Type  []Snippet_ValueType `json:"type,omitempty"`
	Value []string            `json:"value,omitempty"`
}
type Snippet_Dependency struct {
	DependencyProjection []*Snippet_Projection `json:"dependencyProjection,omitempty"`
	DependencyFilter     []*Snippet_Filter     `json:"dependencyFilter,omitempty"`
}

type Snippet_Projection struct {
	SelectType Snippet_Projection_SelectType `json:"selectType,omitempty"`
	Value      []string                      `json:"value,omitempty"`
	ValueType  []Snippet_ValueType           `json:"valueType,omitempty"`
}

type Snippet_Order struct {
	Ascending  []Snippet_Order_OrderDirection `json:"ascending,omitempty"`
	ColumnName []string                       `json:"columnName,omitempty"`
}
