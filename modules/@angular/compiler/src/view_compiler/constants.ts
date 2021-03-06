/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ChangeDetectionStrategy, ViewEncapsulation, ɵViewType as ViewType} from '@angular/core';
import {createEnumExpression} from '../compiler_util/identifier_util';
import {Identifiers} from '../identifiers';
import * as o from '../output/output_ast';

export class ViewTypeEnum {
  static fromValue(value: ViewType): o.Expression {
    return createEnumExpression(Identifiers.ViewType, value);
  }
}

export class ViewEncapsulationEnum {
  static fromValue(value: ViewEncapsulation): o.Expression {
    return createEnumExpression(Identifiers.ViewEncapsulation, value);
  }
}

export class ChangeDetectorStatusEnum {
  static fromValue(value: ChangeDetectorStatusEnum): o.Expression {
    return createEnumExpression(Identifiers.ChangeDetectorStatus, value);
  }
}

export class ViewConstructorVars {
  static viewUtils = o.variable('viewUtils');
  static parentView = o.variable('parentView');
  static parentIndex = o.variable('parentIndex');
  static parentElement = o.variable('parentElement');
}

export class ViewProperties {
  static renderer = o.THIS_EXPR.prop('renderer');
  static viewUtils = o.THIS_EXPR.prop('viewUtils');
  static throwOnChange = o.THIS_EXPR.prop('throwOnChange');
}

export class InjectMethodVars {
  static token = o.variable('token');
  static requestNodeIndex = o.variable('requestNodeIndex');
  static notFoundResult = o.variable('notFoundResult');
}
