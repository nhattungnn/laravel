<?php $__env->startSection('breadcrumb'); ?>
<li>
    <a href="<?php echo e(route('admin.member.index')); ?>"> Thành viên </a>
    <i class="fa fa-circle"></i>
</li>
<li>
    <span> Thêm mới </span>
</li>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('content'); ?>
<div class="row">
    <?php echo $__env->make('admin.blocks.messages', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    <!-- BEGIN FORM-->
    <form role="form" method="POST" action="<?php echo e(route('admin.member.store')); ?>">
        <?php echo e(csrf_field()); ?>


        <div class="col-lg-9 col-xs-12">
            <div class="portlet box green">
                <div class="portlet-title">
                    <div class="caption"> Thêm mới </div>
                </div>
                <div class="portlet-body">
                    <div class="form-group">
                        <label class="control-label">Họ và tên</label>
                        <div>
                            <input type="text" name="data[name]" class="form-control" value="<?php echo e(old('data.name')); ?>">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Email</label>
                        <div>
                            <input type="text" name="data[email]" class="form-control" value="<?php echo e(old('data.email')); ?>">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Điện thoại</label>
                        <div>
                            <input type="text" name="data[phone]" class="form-control" value="<?php echo e(old('data.phone')); ?>">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Địa chỉ</label>
                        <div>
                            <input type="text" name="data[address]" class="form-control" value="<?php echo e(old('data.address')); ?>">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Tỉnh / Thành phố</label>
                        <div>
                            <select class="form-control province" name="data[province_id]">
                                <?php echo e(old('data.province_id') ? '<option value="'.old('data.province_id').'" selected ></option>' : ''); ?>

                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Quận / Huyện</label>
                        <div>
                            <select class="form-control district" name="data[district_id]">
                                <?php echo e(old('data.district_id') ? '<option value="'.old('data.district_id').'" selected ></option>' : ''); ?>

                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-xs-12">
            <div class="portlet box green">
                <div class="portlet-title">
                    <div class="caption"> Thông tin chung </div>
                </div>
                <div class="portlet-body">
                    
                    <div class="form-group">
                        <label class="control-label">Mật khẩu</label>
                        <div>
                            <input type="password" name="password" class="form-control" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Xác nhận mật khẩu</label>
                        <div>
                            <input type="password" name="password_confirmation" class="form-control" value="">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label">Tình trạng</label>
                        <div>
                            <select class="selectpicker show-tick show-menu-arrow form-control" name="status[]" multiple>
                                <option value="publish" <?php echo e((old('status')) ? ( (in_array('publish',old('status'))) ? 'selected' : '') : 'selected'); ?> > Hiển thị </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Thứ tự</label>
                        <div>
                            <input type="text" name="priority" class="form-control priceFormat" value="<?php echo e((old('priority')) ? old('priority') : 1); ?>">
                        </div>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn green"> <i class="fa fa-check"></i> Lưu</button>
                        <a href="<?php echo e(url()->previous()); ?>" class="btn default" > Thoát </a>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>