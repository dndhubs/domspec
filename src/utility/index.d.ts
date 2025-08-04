// index.d.ts - Reorganized with sub-directories for DNDHUBS DOMSpec Utilities

// Basic
export type * from './basic/primitive.js';
export type * from './basic/typed-array.js';
export type * from './basic/basic.js';
export type * from './basic/json-value.js';
export type * from './basic/characters.js';

// Object Manipulation
export type {KeysOfUnion} from './object-manipulation/keys-of-union.js';
export type {DistributedOmit} from './object-manipulation/distributed-omit.js';
export type {DistributedPick} from './object-manipulation/distributed-pick.js';
export type {EmptyObject, IsEmptyObject} from './object-manipulation/empty-object.js';
export type {IfEmptyObject} from './object-manipulation/if-empty-object.js';
export type {NonEmptyObject} from './object-manipulation/non-empty-object.js';
export type {UnknownRecord} from './object-manipulation/unknown-record.js';
export type {Except} from './object-manipulation/except.js';
export type {Writable} from './object-manipulation/writable.js';
export type {Merge} from './object-manipulation/merge.js';
export type {MergeExclusive} from './object-manipulation/merge-exclusive.js';
export type {RequireAtLeastOne} from './object-manipulation/require-at-least-one.js';
export type {RequireExactlyOne} from './object-manipulation/require-exactly-one.js';
export type {RequireAllOrNone} from './object-manipulation/require-all-or-none.js';
export type {RequireOneOrNone} from './object-manipulation/require-one-or-none.js';
export type {SingleKeyObject} from './object-manipulation/single-key-object.js';
export type {OmitIndexSignature} from './object-manipulation/omit-index-signature.js';
export type {PickIndexSignature} from './object-manipulation/pick-index-signature.js';
export type {PartialDeep, PartialDeepOptions} from './object-manipulation/partial-deep.js';
export type {PickDeep} from './object-manipulation/pick-deep.js';
export type {OmitDeep} from './object-manipulation/omit-deep.js';
export type {PartialOnUndefinedDeep, PartialOnUndefinedDeepOptions} from './object-manipulation/partial-on-undefined-deep.js';
export type {UndefinedOnPartialDeep} from './object-manipulation/undefined-on-partial-deep.js';
export type {SetOptional} from './object-manipulation/set-optional.js';
export type {SetReadonly} from './object-manipulation/set-readonly.js';
export type {SetRequired} from './object-manipulation/set-required.js';
export type {SetNonNullable} from './object-manipulation/set-non-nullable.js';
export type {ValueOf} from './object-manipulation/value-of.js';
export type {ConditionalExcept} from './object-manipulation/conditional-except.js';
export type {ConditionalKeys} from './object-manipulation/conditional-keys.js';
export type {ConditionalPick} from './object-manipulation/conditional-pick.js';
export type {Entry} from './object-manipulation/entry.js';
export type {Entries} from './object-manipulation/entries.js';
export type {Simplify} from './object-manipulation/simplify.js';
export type {KeyAsString} from './object-manipulation/key-as-string.js';
export type {Exact} from './object-manipulation/exact.js';
export type {OptionalKeysOf} from './object-manipulation/optional-keys-of.js';
export type {OverrideProperties} from './object-manipulation/override-properties.js';
export type {HasOptionalKeys} from './object-manipulation/has-optional-keys.js';
export type {RequiredKeysOf} from './object-manipulation/required-keys-of.js';
export type {HasRequiredKeys} from './object-manipulation/has-required-keys.js';
export type {ReadonlyKeysOf} from './object-manipulation/readonly-keys-of.js';
export type {HasReadonlyKeys} from './object-manipulation/has-readonly-keys.js';
export type {WritableKeysOf} from './object-manipulation/writable-keys-of.js';
export type {HasWritableKeys} from './object-manipulation/has-writable-keys.js';
export type {Spread} from './object-manipulation/spread.js';
export type {TupleToObject} from './object-manipulation/tuple-to-object.js';
export type {Paths} from './object-manipulation/paths.js';
export type {AllUnionFields} from './object-manipulation/all-union-fields.js';
export type {SharedUnionFields} from './object-manipulation/shared-union-fields.js';
export type {Get} from './object-manipulation/get.js';
export type {SetFieldType} from './object-manipulation/set-field-type.js';

// Array and Iterable
export type {NonEmptyString} from './array-iterable/non-empty-string.js';
export type {UnknownArray} from './array-iterable/unknown-array.js';
export type {UnknownSet} from './array-iterable/unknown-set.js';
export type {UnknownMap} from './array-iterable/unknown-map.js';
export type {Arrayable} from './array-iterable/arrayable.js';
export type {FixedLengthArray} from './array-iterable/fixed-length-array.js';
export type {MultidimensionalArray} from './array-iterable/multidimensional-array.js';
export type {MultidimensionalReadonlyArray} from './array-iterable/multidimensional-readonly-array.js';
export type {IterableElement} from './array-iterable/iterable-element.js';
export type {ReadonlyTuple} from './array-iterable/readonly-tuple.js';
export type {IsTuple} from './array-iterable/is-tuple.js';
export type {ArrayIndices} from './array-iterable/array-indices.js';
export type {ArrayValues} from './array-iterable/array-values.js';
export type {ArraySlice} from './array-iterable/array-slice.js';
export type {ArraySplice} from './array-iterable/array-splice.js';
export type {ArrayTail} from './array-iterable/array-tail.js';
export type {LastArrayElement} from './array-iterable/last-array-element.js';
export type {NonEmptyTuple} from './array-iterable/non-empty-tuple.js';
export type {TupleToUnion} from './array-iterable/tuple-to-union.js';
export type {UnionToTuple} from './array-iterable/union-to-tuple.js';

// Numeric and Math
export type {
	PositiveInfinity,
	NegativeInfinity,
	Finite,
	Integer,
	Float,
	NegativeFloat,
	Negative,
	NonNegative,
	NegativeInteger,
	NonNegativeInteger,
	IsNegative,
} from './numeric-math/numeric.js';
export type {GreaterThan} from './numeric-math/greater-than.js';
export type {GreaterThanOrEqual} from './numeric-math/greater-than-or-equal.js';
export type {LessThan} from './numeric-math/less-than.js';
export type {LessThanOrEqual} from './numeric-math/less-than-or-equal.js';
export type {Sum} from './numeric-math/sum.js';
export type {Subtract} from './numeric-math/subtract.js';
export type {IsInteger} from './numeric-math/is-integer.js';
export type {IsFloat} from './numeric-math/is-float.js';
export type {IntRange} from './numeric-math/int-range.js';
export type {IntClosedRange} from './numeric-math/int-closed-range.js';

// String and Case
export type {CamelCase} from './string-case/camel-case.js';
export type {CamelCasedProperties} from './string-case/camel-cased-properties.js';
export type {CamelCasedPropertiesDeep} from './string-case/camel-cased-properties-deep.js';
export type {KebabCase} from './string-case/kebab-case.js';
export type {KebabCasedProperties} from './string-case/kebab-cased-properties.js';
export type {KebabCasedPropertiesDeep} from './string-case/kebab-cased-properties-deep.js';
export type {PascalCase} from './string-case/pascal-case.js';
export type {PascalCasedProperties} from './string-case/pascal-cased-properties.js';
export type {PascalCasedPropertiesDeep} from './string-case/pascal-cased-properties-deep.js';
export type {SnakeCase} from './string-case/snake-case.js';
export type {SnakeCasedProperties} from './string-case/snake-cased-properties.js';
export type {SnakeCasedPropertiesDeep} from './string-case/snake-cased-properties-deep.js';
export type {ScreamingSnakeCase} from './string-case/screaming-snake-case.js';
export type {DelimiterCase} from './string-case/delimiter-case.js';
export type {DelimiterCasedProperties} from './string-case/delimiter-cased-properties.js';
export type {DelimiterCasedPropertiesDeep} from './string-case/delimiter-cased-properties-deep.js';
export type {IsLowercase} from './string-case/is-lowercase.js';
export type {IsUppercase} from './string-case/is-uppercase.js';

// Template Literal
export type {Join} from './template-literal/join.js';
export type {Split} from './template-literal/split.js';
export type {Words} from './template-literal/words.js';
export type {Trim} from './template-literal/trim.js';
export type {Replace} from './template-literal/replace.js';
export type {StringRepeat} from './template-literal/string-repeat.js';
export type {Includes} from './template-literal/includes.js';
export type {Stringified} from './template-literal/stringified.js';
export type {StringSlice} from './template-literal/string-slice.js';
export type {RemovePrefix} from './template-literal/remove-prefix.js';

// Conditional and Guards
export type {ConditionalPickDeep, ConditionalPickDeepOptions} from './conditional-guards/conditional-pick-deep.js';
export type {IsEqual} from './conditional-guards/is-equal.js';
export type {
	IsLiteral,
	IsStringLiteral,
	IsNumericLiteral,
	IsBooleanLiteral,
	IsSymbolLiteral,
} from './conditional-guards/is-literal.js';
export type {IsAny} from './conditional-guards/is-any.js';
export type {IfAny} from './conditional-guards/if-any.js';
export type {IsNever} from './conditional-guards/is-never.js';
export type {IfNever} from './conditional-guards/if-never.js';
export type {IsUnknown} from './conditional-guards/is-unknown.js';
export type {IfUnknown} from './conditional-guards/if-unknown.js';
export type {IsUnion} from './conditional-guards/is-union.js';
export type {IsNull} from './conditional-guards/is-null.js';
export type {IfNull} from './conditional-guards/if-null.js';
export type {And} from './conditional-guards/and.js';
export type {Or} from './conditional-guards/or.js';
export type {AllExtend} from './conditional-guards/all-extend.js';
export type {If} from './conditional-guards/if.js';
export type {IsOptional} from './conditional-guards/is-optional.js';
export type {IsNullable} from './conditional-guards/is-nullable.js';
export type {ConditionalSimplify} from './conditional-guards/conditional-simplify.js';
export type {ConditionalSimplifyDeep} from './conditional-guards/conditional-simplify-deep.js';

// Async and Function
export type {AsyncReturnType} from './async-function/async-return-type.js';
export type {Promisable} from './async-function/promisable.js';
export type {SetReturnType} from './async-function/set-return-type.js';
export type {SetParameterType} from './async-function/set-parameter-type.js';
export type {Asyncify} from './async-function/asyncify.js';
export type {InvariantOf} from './async-function/invariant-of.js';
export type {LiteralToPrimitive} from './async-function/literal-to-primitive.js';
export type {LiteralToPrimitiveDeep} from './async-function/literal-to-primitive-deep.js';

// Union and Intersection
export type {TaggedUnion} from './union-intersection/tagged-union.js';
export type {UnionToIntersection} from './union-intersection/union-to-intersection.js';
export type {LiteralUnion} from './union-intersection/literal-union.js';
export type {Opaque, UnwrapOpaque, Tagged, GetTagMetadata, UnwrapTagged} from './union-intersection/tagged.js';
export type {SharedUnionFieldsDeep} from './union-intersection/shared-union-fields-deep.js';
export type {FindGlobalInstanceType, FindGlobalType} from './union-intersection/find-global-type.js';

// Deep and Recursive
export type {WritableDeep} from './deep-recursive/writable-deep.js';
export type {MergeDeep, MergeDeepOptions} from './deep-recursive/merge-deep.js';
export type {RequiredDeep} from './deep-recursive/required-deep.js';
export type {ReadonlyDeep} from './deep-recursive/readonly-deep.js';
export type {SetRequiredDeep} from './deep-recursive/set-required-deep.js';
export type {SetNonNullableDeep} from './deep-recursive/set-non-nullable-deep.js';
export type {SimplifyDeep} from './deep-recursive/simplify-deep.js';

// Miscellaneous
export type {GlobalThis} from './miscellaneous/global-this.js';
export type {PackageJson} from './miscellaneous/package-json.js';
export type {TsConfigJson} from './miscellaneous/tsconfig-json.js';
export type {Jsonify} from './miscellaneous/jsonify.js';
export type {Jsonifiable} from './miscellaneous/jsonifiable.js';
export type {StructuredCloneable} from './miscellaneous/structured-cloneable.js';
export type {Schema, SchemaOptions} from './miscellaneous/schema.js';

// Improved Built-in
export type {ExtendsStrict} from './builtin/extends-strict.js';
export type {ExtractStrict} from './builtin/extract-strict.js';
export type {ExcludeStrict} from './builtin/exclude-strict.js';