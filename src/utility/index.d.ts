// index.d.ts - Reorganized with sub-directories for DNDHUBS DOMSpec Utilities

// Basic
export type * from './basic/primitive.d.ts';
export type * from './basic/typed-array.d.ts';
export type * from './basic/basic.d.ts';
export type * from './basic/json-value.d.ts';
export type * from './basic/characters.d.ts';

// Object Manipulation
export type {KeysOfUnion} from './object-manipulation/keys-of-union.d.ts';
export type {DistributedOmit} from './object-manipulation/distributed-omit.d.ts';
export type {DistributedPick} from './object-manipulation/distributed-pick.d.ts';
export type {EmptyObject, IsEmptyObject} from './object-manipulation/empty-object.d.ts';
export type {IfEmptyObject} from './object-manipulation/if-empty-object.d.ts';
export type {NonEmptyObject} from './object-manipulation/non-empty-object.d.ts';
export type {UnknownRecord} from './object-manipulation/unknown-record.d.ts';
export type {Except} from './object-manipulation/except.d.ts';
export type {Writable} from './object-manipulation/writable.d.ts';
export type {Merge} from './object-manipulation/merge.d.ts';
export type {MergeExclusive} from './object-manipulation/merge-exclusive.d.ts';
export type {RequireAtLeastOne} from './object-manipulation/require-at-least-one.d.ts';
export type {RequireExactlyOne} from './object-manipulation/require-exactly-one.d.ts';
export type {RequireAllOrNone} from './object-manipulation/require-all-or-none.d.ts';
export type {RequireOneOrNone} from './object-manipulation/require-one-or-none.d.ts';
export type {SingleKeyObject} from './object-manipulation/single-key-object.d.ts';
export type {OmitIndexSignature} from './object-manipulation/omit-index-signature.d.ts';
export type {PickIndexSignature} from './object-manipulation/pick-index-signature.d.ts';
export type {PartialDeep, PartialDeepOptions} from './object-manipulation/partial-deep.d.ts';
export type {PickDeep} from './object-manipulation/pick-deep.d.ts';
export type {OmitDeep} from './object-manipulation/omit-deep.d.ts';
export type {PartialOnUndefinedDeep, PartialOnUndefinedDeepOptions} from './object-manipulation/partial-on-undefined-deep.d.ts';
export type {UndefinedOnPartialDeep} from './object-manipulation/undefined-on-partial-deep.d.ts';
export type {SetOptional} from './object-manipulation/set-optional.d.ts';
export type {SetReadonly} from './object-manipulation/set-readonly.d.ts';
export type {SetRequired} from './object-manipulation/set-required.d.ts';
export type {SetNonNullable} from './object-manipulation/set-non-nullable.d.ts';
export type {ValueOf} from './object-manipulation/value-of.d.ts';
export type {ConditionalExcept} from './object-manipulation/conditional-except.d.ts';
export type {ConditionalKeys} from './object-manipulation/conditional-keys.d.ts';
export type {ConditionalPick} from './object-manipulation/conditional-pick.d.ts';
export type {Entry} from './object-manipulation/entry.d.ts';
export type {Entries} from './object-manipulation/entries.d.ts';
export type {Simplify} from './object-manipulation/simplify.d.ts';
export type {KeyAsString} from './object-manipulation/key-as-string.d.ts';
export type {Exact} from './object-manipulation/exact.d.ts';
export type {OptionalKeysOf} from './object-manipulation/optional-keys-of.d.ts';
export type {OverrideProperties} from './object-manipulation/override-properties.d.ts';
export type {HasOptionalKeys} from './object-manipulation/has-optional-keys.d.ts';
export type {RequiredKeysOf} from './object-manipulation/required-keys-of.d.ts';
export type {HasRequiredKeys} from './object-manipulation/has-required-keys.d.ts';
export type {ReadonlyKeysOf} from './object-manipulation/readonly-keys-of.d.ts';
export type {HasReadonlyKeys} from './object-manipulation/has-readonly-keys.d.ts';
export type {WritableKeysOf} from './object-manipulation/writable-keys-of.d.ts';
export type {HasWritableKeys} from './object-manipulation/has-writable-keys.d.ts';
export type {Spread} from './object-manipulation/spread.d.ts';
export type {TupleToObject} from './object-manipulation/tuple-to-object.d.ts';
export type {Paths} from './object-manipulation/paths.d.ts';
export type {AllUnionFields} from './object-manipulation/all-union-fields.d.ts';
export type {SharedUnionFields} from './object-manipulation/shared-union-fields.d.ts';
export type {Get} from './object-manipulation/get.d.ts';
export type {SetFieldType} from './object-manipulation/set-field-type.d.ts';

// Array and Iterable
export type {NonEmptyString} from './array-iterable/non-empty-string.d.ts';
export type {UnknownArray} from './array-iterable/unknown-array.d.ts';
export type {UnknownSet} from './array-iterable/unknown-set.d.ts';
export type {UnknownMap} from './array-iterable/unknown-map.d.ts';
export type {Arrayable} from './array-iterable/arrayable.d.ts';
export type {FixedLengthArray} from './array-iterable/fixed-length-array.d.ts';
export type {MultidimensionalArray} from './array-iterable/multidimensional-array.d.ts';
export type {MultidimensionalReadonlyArray} from './array-iterable/multidimensional-readonly-array.d.ts';
export type {IterableElement} from './array-iterable/iterable-element.d.ts';
export type {ReadonlyTuple} from './array-iterable/readonly-tuple.d.ts';
export type {IsTuple} from './array-iterable/is-tuple.d.ts';
export type {ArrayIndices} from './array-iterable/array-indices.d.ts';
export type {ArrayValues} from './array-iterable/array-values.d.ts';
export type {ArraySlice} from './array-iterable/array-slice.d.ts';
export type {ArraySplice} from './array-iterable/array-splice.d.ts';
export type {ArrayTail} from './array-iterable/array-tail.d.ts';
export type {LastArrayElement} from './array-iterable/last-array-element.d.ts';
export type {NonEmptyTuple} from './array-iterable/non-empty-tuple.d.ts';
export type {TupleToUnion} from './array-iterable/tuple-to-union.d.ts';
export type {UnionToTuple} from './array-iterable/union-to-tuple.d.ts';

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
} from './numeric-math/numeric.d.ts';
export type {GreaterThan} from './numeric-math/greater-than.d.ts';
export type {GreaterThanOrEqual} from './numeric-math/greater-than-or-equal.d.ts';
export type {LessThan} from './numeric-math/less-than.d.ts';
export type {LessThanOrEqual} from './numeric-math/less-than-or-equal.d.ts';
export type {Sum} from './numeric-math/sum.d.ts';
export type {Subtract} from './numeric-math/subtract.d.ts';
export type {IsInteger} from './numeric-math/is-integer.d.ts';
export type {IsFloat} from './numeric-math/is-float.d.ts';
export type {IntRange} from './numeric-math/int-range.d.ts';
export type {IntClosedRange} from './numeric-math/int-closed-range.d.ts';

// String and Case
export type {CamelCase} from './string-case/camel-case.d.ts';
export type {CamelCasedProperties} from './string-case/camel-cased-properties.d.ts';
export type {CamelCasedPropertiesDeep} from './string-case/camel-cased-properties-deep.d.ts';
export type {KebabCase} from './string-case/kebab-case.d.ts';
export type {KebabCasedProperties} from './string-case/kebab-cased-properties.d.ts';
export type {KebabCasedPropertiesDeep} from './string-case/kebab-cased-properties-deep.d.ts';
export type {PascalCase} from './string-case/pascal-case.d.ts';
export type {PascalCasedProperties} from './string-case/pascal-cased-properties.d.ts';
export type {PascalCasedPropertiesDeep} from './string-case/pascal-cased-properties-deep.d.ts';
export type {SnakeCase} from './string-case/snake-case.d.ts';
export type {SnakeCasedProperties} from './string-case/snake-cased-properties.d.ts';
export type {SnakeCasedPropertiesDeep} from './string-case/snake-cased-properties-deep.d.ts';
export type {ScreamingSnakeCase} from './string-case/screaming-snake-case.d.ts';
export type {DelimiterCase} from './string-case/delimiter-case.d.ts';
export type {DelimiterCasedProperties} from './string-case/delimiter-cased-properties.d.ts';
export type {DelimiterCasedPropertiesDeep} from './string-case/delimiter-cased-properties-deep.d.ts';
export type {IsLowercase} from './string-case/is-lowercase.d.ts';
export type {IsUppercase} from './string-case/is-uppercase.d.ts';

// Template Literal
export type {Join} from './template-literal/join.d.ts';
export type {Split} from './template-literal/split.d.ts';
export type {Words} from './template-literal/words.d.ts';
export type {Trim} from './template-literal/trim.d.ts';
export type {Replace} from './template-literal/replace.d.ts';
export type {StringRepeat} from './template-literal/string-repeat.d.ts';
export type {Includes} from './template-literal/includes.d.ts';
export type {Stringified} from './template-literal/stringified.d.ts';
export type {StringSlice} from './template-literal/string-slice.d.ts';
export type {RemovePrefix} from './template-literal/remove-prefix.d.ts';

// Conditional and Guards
export type {ConditionalPickDeep, ConditionalPickDeepOptions} from './conditional-guards/conditional-pick-deep.d.ts';
export type {IsEqual} from './conditional-guards/is-equal.d.ts';
export type {
	IsLiteral,
	IsStringLiteral,
	IsNumericLiteral,
	IsBooleanLiteral,
	IsSymbolLiteral,
} from './conditional-guards/is-literal.d.ts';
export type {IsAny} from './conditional-guards/is-any.d.ts';
export type {IfAny} from './conditional-guards/if-any.d.ts';
export type {IsNever} from './conditional-guards/is-never.d.ts';
export type {IfNever} from './conditional-guards/if-never.d.ts';
export type {IsUnknown} from './conditional-guards/is-unknown.d.ts';
export type {IfUnknown} from './conditional-guards/if-unknown.d.ts';
export type {IsUnion} from './conditional-guards/is-union.d.ts';
export type {IsNull} from './conditional-guards/is-null.d.ts';
export type {IfNull} from './conditional-guards/if-null.d.ts';
export type {And} from './conditional-guards/and.d.ts';
export type {Or} from './conditional-guards/or.d.ts';
export type {AllExtend} from './conditional-guards/all-extend.d.ts';
export type {If} from './conditional-guards/if.d.ts';
export type {IsOptional} from './conditional-guards/is-optional.d.ts';
export type {IsNullable} from './conditional-guards/is-nullable.d.ts';
export type {ConditionalSimplify} from './conditional-guards/conditional-simplify.d.ts';
export type {ConditionalSimplifyDeep} from './conditional-guards/conditional-simplify-deep.d.ts';

// Async and Function
export type {AsyncReturnType} from './async-function/async-return-type.d.ts';
export type {Promisable} from './async-function/promisable.d.ts';
export type {SetReturnType} from './async-function/set-return-type.d.ts';
export type {SetParameterType} from './async-function/set-parameter-type.d.ts';
export type {Asyncify} from './async-function/asyncify.d.ts';
export type {InvariantOf} from './async-function/invariant-of.d.ts';
export type {LiteralToPrimitive} from './async-function/literal-to-primitive.d.ts';
export type {LiteralToPrimitiveDeep} from './async-function/literal-to-primitive-deep.d.ts';

// Union and Intersection
export type {TaggedUnion} from './union-intersection/tagged-union.d.ts';
export type {UnionToIntersection} from './union-intersection/union-to-intersection.d.ts';
export type {LiteralUnion} from './union-intersection/literal-union.d.ts';
export type {Opaque, UnwrapOpaque, Tagged, GetTagMetadata, UnwrapTagged} from './union-intersection/tagged.d.ts';
export type {SharedUnionFieldsDeep} from './union-intersection/shared-union-fields-deep.d.ts';
export type {FindGlobalInstanceType, FindGlobalType} from './union-intersection/find-global-type.d.ts';

// Deep and Recursive
export type {WritableDeep} from './deep-recursive/writable-deep.d.ts';
export type {MergeDeep, MergeDeepOptions} from './deep-recursive/merge-deep.d.ts';
export type {RequiredDeep} from './deep-recursive/required-deep.d.ts';
export type {ReadonlyDeep} from './deep-recursive/readonly-deep.d.ts';
export type {SetRequiredDeep} from './deep-recursive/set-required-deep.d.ts';
export type {SetNonNullableDeep} from './deep-recursive/set-non-nullable-deep.d.ts';
export type {SimplifyDeep} from './deep-recursive/simplify-deep.d.ts';

// Miscellaneous
export type {GlobalThis} from './miscellaneous/global-this.d.ts';
export type {PackageJson} from './miscellaneous/package-json.d.ts';
export type {TsConfigJson} from './miscellaneous/tsconfig-json.d.ts';
export type {Jsonify} from './miscellaneous/jsonify.d.ts';
export type {Jsonifiable} from './miscellaneous/jsonifiable.d.ts';
export type {StructuredCloneable} from './miscellaneous/structured-cloneable.d.ts';
export type {Schema, SchemaOptions} from './miscellaneous/schema.d.ts';

// Improved Built-in
export type {ExtendsStrict} from './builtin/extends-strict.d.ts';
export type {ExtractStrict} from './builtin/extract-strict.d.ts';
export type {ExcludeStrict} from './builtin/exclude-strict.d.ts';