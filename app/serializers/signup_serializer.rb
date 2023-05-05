class SignupSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :workshop, :referral_type, :additional_notes

  def workshop
    self.object.workshop
  end
end
